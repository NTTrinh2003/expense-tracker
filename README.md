# expense-tracker
Your CLI personal expense tracker

This program is for self-study purpose, the idea is at: https://roadmap.sh/projects/expense-tracker

The program is used for managing your expense for a year.

Requirement:
- Install npm and nodejs.
- Install the project and unzip.

Usage:
- Use command prompt or similar tool to navigate with the program.
- Base command: node expense-tracker \<option\>
- Options:
  - list: list all expenses.
  - summary: summary all expenses.
  - summary --month \<month\>: summary specific month expenses.
  - add --description \<description\> --amount \<amount\>: add new expense to the database.
  - remove --id \<id\>: remove expense with specific id.
  - update --id \<id\> --description \<description\> --amount \<amount\>: update expense with specific id.
 
Unresolved problems:
1. For parsing commands, I handle it with no module because I have to handle blank spaces and \n.
2. For command line arguments, I tried to give users to mix up the input order but that in fact from the way I know to do it, it is too complicated and hard to understand afterward.
3. For base command, I don't know how to get rid of the 'node', I tried modify package.json, but it make us have to use 'npm \<program\>', so I left it where it is.

If you know any solution to handle my problems, please let me know, thank you for visiting.
