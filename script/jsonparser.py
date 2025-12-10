import json

def main():
    with open('playwright-report/results.json') as f:
        json_data = json.load(f)
        for key, value in json_data['stats'].items():
            print(f"{value}")
    f.close()
if __name__ == "__main__":
    main()
