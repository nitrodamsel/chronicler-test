import PageLayout from "../components/layout/PageLayout";
import { useLocationDistanceUpload } from "../hooks/useLocationDistanceUpload";

function HomePage() {
  const { errorMessage, fileName, handleFileChange, isSubmitting, totalDistance } =
    useLocationDistanceUpload();
  const hasResult = totalDistance !== null;

  return (
    <PageLayout
      title="Chronicler"
      subtitle="Upload the list of historical locations as a .txt file and get the total distance traveled."
    >
      <div className="space-y-6">
        <section className="w-full space-y-5 rounded-3xl border border-state-ghost bg-white p-5 sm:p-6">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Upload input file</h2>
            <p className="mt-2 text-sm text-slate-600">
              Accepts .txt files only. There is no submit button because upload is triggered when a
              file is selected.
            </p>
          </div>

          <label className="block space-y-2" htmlFor="location-file">
            <span className="text-sm font-semibold text-slate-700">Choose a text file</span>
            <input
              id="location-file"
              name="location-file"
              type="file"
              accept=".txt,text/plain"
              onChange={handleFileChange}
              className="block w-full cursor-pointer rounded-2xl border border-dashed border-state-ghost bg-white px-4 py-3 text-sm text-slate-700 file:mr-4 file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:border-primary/40"
            />
          </label>

          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full bg-state-default px-3 py-1 text-xs font-semibold text-slate-700">
              Auto submit
            </span>
            {fileName ? (
              <span className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                Selected: {fileName}
              </span>
            ) : (
              <span className="inline-flex items-center rounded-full bg-state-ghost px-3 py-1 text-xs font-semibold text-slate-600">
                No file selected
              </span>
            )}
            {isSubmitting ? (
              <span className="inline-flex items-center rounded-full bg-state-warning/15 px-3 py-1 text-xs font-semibold text-state-warning">
                Processing file...
              </span>
            ) : null}
          </div>

          {errorMessage ? (
            <p
              role="alert"
              className="rounded-2xl border border-state-error/20 bg-state-error/10 px-4 py-3 text-sm text-state-error"
            >
              {errorMessage}
            </p>
          ) : null}
        </section>

        <section className="w-full space-y-4 rounded-3xl border border-state-ghost bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-xl font-bold text-slate-900">Response</h2>

          {isSubmitting ? (
            <div className="rounded-2xl border border-state-warning/25 bg-state-warning/10 px-4 py-5">
              <p className="text-sm font-semibold text-state-warning">Calculating distance</p>
              {/* Loading spinner */}
              <div className="mt-3 flex items-center space-x-2">
                <svg
                  className="animate-spin h-5 w-5 text-state-warning"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                <span className="text-sm text-state-warning">Please wait...</span>
              </div>
            </div>
          ) : null}

          {!isSubmitting && errorMessage ? (
            <div className="rounded-2xl border border-state-error/20 bg-state-error/10 px-4 py-5">
              <p className="text-sm font-semibold text-state-error">Could not calculate distance</p>
              <p className="mt-2 text-sm text-slate-700">{errorMessage}</p>
            </div>
          ) : null}

          {!isSubmitting && !errorMessage && !hasResult ? (
            <div className="rounded-2xl border border-state-ghost bg-state-default px-4 py-5">
              <p className="text-sm font-semibold text-slate-700">No result yet</p>
              <p className="mt-2 text-sm text-slate-600">
                Select a .txt file above to trigger the calculation automatically.
              </p>
            </div>
          ) : null}

          {!isSubmitting && !errorMessage && hasResult ? (
            <div className="rounded-2xl bg-primary p-5 text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-white/70">Total distance</p>
              <p className="mt-3 text-4xl font-black tracking-tight">{totalDistance}</p>
              <p className="mt-2 inline-flex rounded-full bg-state-success/20 px-3 py-1 text-xs font-semibold text-white">
                Calculation complete
              </p>
            </div>
          ) : null}
        </section>
      </div>
    </PageLayout>
  );
}

export default HomePage;
