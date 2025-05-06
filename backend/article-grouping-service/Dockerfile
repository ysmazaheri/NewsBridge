FROM python:3.11-slim

WORKDIR /app

# Copy the requirements file and install dependencies
COPY requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r /app/requirements.txt

# Copy the application code
COPY . /app

# Expose the port the service will run on
EXPOSE 8001

# Command to run the application
CMD ["uvicorn", "group-articles:app", "--host", "0.0.0.0", "--port", "8001"]