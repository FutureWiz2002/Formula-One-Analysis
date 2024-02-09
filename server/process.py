import pandas as pd
import json
import re

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

for driver in driverlist:
    driverdata = driverProfile(driver)
    race_finishes = 0
    race_wins = 0
    podiums = 0
    total_points = 0
    average = 0
    
    updated_points = []

    for points in driverdata:
        
        try:
            total_points += points
            if int(points) >= 25:
                race_wins += 1
            if int(points) >= 18:
                podiums += 1
            race_finishes += 1
            updated_points.append(int(points))
            
        except:
            print("Nan Detected") 
            updated_points.append(0)
    average = total_points / race_finishes

    all_data[driver] = {}
    all_data[driver]["race_wins"] = int(race_wins)
    all_data[driver]["podiums"] = int(podiums)
    all_data[driver]["total_points"] = total_points
    all_data[driver]["average"] = average
    all_data[driver]["race_finishes"] = updated_points


print(json.dumps(all_data))