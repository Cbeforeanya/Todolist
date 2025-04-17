# To-Do List App

This is a full-stack To-Do List application built using **Python**, **Django**, and **React.js**. The backend is developed with Django and the frontend is created with React.js, providing a simple and interactive interface for users to manage their tasks.

## Features

- **Create Tasks**: Add new tasks to your to-do list.
- **Update Tasks**: Mark tasks as completed or uncompleted.
- **Delete Tasks**: Remove tasks from the list when completed.
- **Responsive Design**: Works across all devices.

## Technologies Used

- **Backend**: Python, Django, Django Rest Framework
- **Frontend**: React.js
- **Database**: SQLite (default for Django)
- **API**: RESTful APIs to handle CRUD operations
- **Authentication**: Token-based authentication (if implemented)

## Installation

### Backend (Django)

1. Clone this repository to your local machine:

    ```bash
    git clone  https://github.com/Cbeforeanya/Todolist.git
    cd Todolist/backend
    ```

2. Create and activate a virtual environment:

    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. Install the required dependencies:

    ```bash
    pip install -r requirements.txt
    ```

4. Run database migrations:

    ```bash
    python manage.py migrate
    ```

5. Start the Django development server:

    ```bash
    python manage.py runserver
    ```

    Your backend will be available at `http://127.0.0.1:8000/`.

### Frontend (React.js)

1. Navigate to the frontend directory:

    ```bash
    cd frontend
    ```

2. Install the necessary Node.js dependencies:

    ```bash
    npm install
    ```

3. Start the React development server:

    ```bash
    npm start
    ```

    Your frontend will be available at `http://localhost:3000/`.

### Environment Variables

You may need to set the following environment variables (if any):

- `REACT_APP_API_URL`: URL of your Django API (e.g., `http://127.0.0.1:8000/`).

## Usage

1. Open the frontend application in your browser: `http://localhost:3000/`.
2. You can now add, update, and delete tasks from the to-do list.
3. All changes will be reflected in the Django backend.

## Folder Structure
Todoapp/ │ ├── backend/ # Django backend folder │ ├── todo/ # App for managing tasks │ ├── manage.py # Django manage script │ └── requirements.txt # Required dependencies │ ├── frontend/ # React frontend folder │ ├── public/ # Public files │ ├── src/ # React components and app logic │ └── package.json # Node.js dependencies │ └── myworld/ # Test environment or additional resources

