import os

def tree(dir_path, indent=''):
    items = os.listdir(dir_path)
    for index, item in enumerate(sorted(items)):
        full_path = os.path.join(dir_path, item)
        is_last = index == len(items) - 1
        prefix = '└── ' if is_last else '├── '
        print(indent + prefix + item)
        if os.path.isdir(full_path):
            extension = '    ' if is_last else '│   '
            tree(full_path, indent + extension)

tree('.')
