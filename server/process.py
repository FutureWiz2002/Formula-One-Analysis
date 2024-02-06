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
    race_finishes = 0
    race_wins = 0
    podiums = 0
    total_points = 0
    average = 0
    

    for points in driverdata:
        
        try:
            total_points += points
            if int(points) >= 25:
                race_wins += 1
            if int(points) >= 18:
                podiums += 1
            race_finishes += 1
            
        except:
            print("Nan Detected") 
    average = points / race_finishes
        



    for i in driverdata:
        all_data[i] = []
        all_data[i].append(race_wins)
        all_data[i].append(podiums)
        all_data[i].append(total_points)
        all_data[i].append(race_finishes)
        all_data[i].append(average)
        all_data[i].append(driverdata)


print(json.dumps(all_data))