CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    completion_date DATE,
    due_date DATE DEFAULT NULL
);