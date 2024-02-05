import pandas as pd
import json

df = pd.read_csv("F1_2023.csv", encoding='latin-1')
driverlist = df['Driver']
print(driverlist)

def driverProfile(driverName):
    desired_driver_name = driverName
    result_list = df[df['Driver'].eq(desired_driver_name) & df['Driver'].notna()].values.flatten().tolist()
    result_list.pop(0)
    result_list.pop(0)
    return result_list

all_data = {}

for i in driverlist:
    driverdata = driverProfile(i)
    all_data[i] = driverdata

for i, j in all_data.items():
    print(i, j)
    print("\n")

print(json.dumps(all_data))