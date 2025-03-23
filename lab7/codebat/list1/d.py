import os

# Define the directory where you want to create the files
directory = r"C:\Users\isenb\OneDrive\Документы\for school\WebDev\lab7\codebat\list1"

# Ensure the directory exists (create it if it doesn't)
os.makedirs(directory, exist_ok=True)

# Loop through numbers 1 to 10 and create the files in the specified directory
for i in range(1, 11):
    file_name = f"{i}.py"
    