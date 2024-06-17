def generate_file(fname="data.json") -> None:
    """
    Given an input JSON file, generate appropriate OpenSearch
    formatting JSON file.

    :fname: name of input file
    """
    with open(fname, 'r') as f:
        data = f.readlines()

        with open("data_formatted.json", 'w') as out:
            idx = 1
            for i in range(len(data)):
                if data[i] == "\n" or data[i].startswith("//"): # empty lines and comments for categorization
                    continue
                out.write(f'{{ "index" : {{ "_index": "me", "_id" : "{idx}" }} }}\n')
                out.write(data[i])
                idx += 1

            out.write('\n')    # terminate with newline


if __name__ == "__main__":
    generate_file()