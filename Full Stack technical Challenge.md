# Chronicler                                                                                                                                                                                                                                                                                  
                                               
Welcome to the Karmo engineering technical challenge. This monorepo contains skeleton code for the Chronicler app — a React frontend and a Node.js backend, managed with [npm workspaces](https://docs.npmjs.com/cli/v9/using-npm/workspaces).                                                
   
  ## The Challenge                                                                                                                                                                                                                                                                              
                                                                  
  Your task is to implement a small full-stack feature:

  1. **Frontend** — Allow a user to upload a text file containing two lists (see `input.txt` for the expected format), submit them to the backend, and display the total distance returned
  2. **Backend** — Accept the submitted lists, calculate the total distance as described in the attached problem statement, and return the result
  3. **Polish** — Tidy up the frontend so it looks presentable                                                                                                                                                                                                                                  
   
You have **2–3 hours**. Focus on clarity and quality over completeness — if you run out of time, use `// TODO` comments to describe what you'd do next.                                                                                                                                       
                                                                  
  ## What We're Looking For                                                                                                                                                                                                                                                                     
                                                                  
  | Area | What good looks like |
  |---|---|
  | **Code quality** | Structure, naming, readability, SOLID principles |
  | **API design** | RESTful patterns, appropriate status codes |
  | **Error handling** | Input validation, missing data, meaningful errors |                                                                                                                                                                                                                    
  | **Testability** | Clean separation of logic; tests a bonus |
  | **Documentation** | Clear, concise, useful |                                                                                                                                                                                                                                                
  | **Decision-making** | Prioritised features, sensible trade-offs |
                                                                                                                                                                                                                                                                                                
Treat this as if you were raising a pull request at your own company. Structure and separation of concerns matter, even for a small problem.
                                                                                                                                                                                                                                                                                                
## Using AI Tools                                               

Use them. Seriously.

At Karmo, AI-assisted development is part of how we work day to day. Claude Code, GitHub Copilot, Cursor — use whatever you're comfortable with and lean into it.                                                                                                                             
   
What we're evaluating isn't whether you can write code from scratch. We're looking at how you think, how you structure a solution, and how effectively you use the tools available to you. Good prompting, critical review of generated output, and knowing when to override suggestions are all things we notice.                                           
                                                                                                                                                                                                                                                                                                
Be ready to walk us through your code and your decisions in the follow-up interview — that's where the real conversation happens.

  ## Project Structure

  ├── frontend/   # React app (TypeScript)                                                                                                                                                                                                                                                      
  ├── backend/    # Node.js app (TypeScript)
  └── input.txt   # Sample input file                                                                                                                                                                                                                                                           
                                                                  
  ## Getting Started

  ```bash
  npm install

  Installs dependencies for both workspaces.                                                                                                                                                                                                                                                    
   
  Frontend                                                                                                                                                                                                                                                                                      
                                                                  
  npm run frontend:start
  npm run frontend:test
  npm run frontend:build

  Backend

  npm run backend:dev
  npm run backend:start
  npm run backend:test

  Deliverables                                                                                                                                                                                                                                                                                  
   
  When you're done, push your solution to this repo and let us know you're ready for review. 
 ```                                                                                                                                                                                           
                                                                  
  Happy hacking!