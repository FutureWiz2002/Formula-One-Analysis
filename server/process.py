import pandas as pd
import json
import re

df = pd.read_csv("F1_2023.csv", encoding='latin-1')
driverlist = df['Driver']
# print(driverlist)

def driverProfile(driverName):
    desired_driver_name = driverName
    result_list = df[df['Driver'].eq(desired_driver_name) & df['Driver'].notna()].values.flatten().tolist()
    result_list.pop(0)
    result_list.pop(0)
    return result_list

all_data = {}


def generateAllDriverData():
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
                print(type(points))
                if type(points) is float:
                    total_points += int(points)
                if int(points) >= 25:
                    race_wins += 1
                if int(points) >= 18:
                    podiums += 1
                race_finishes += 1
                updated_points.append(int(points))
                
            except: 
                updated_points.append(0)
        average = total_points / race_finishes

        all_data[driver] = {}
        all_data[driver]["race_wins"] = int(race_wins)
        all_data[driver]["podiums"] = int(podiums)
        all_data[driver]["total_points"] = int(total_points)
        all_data[driver]["average"] = int(average)
        all_data[driver]["race_finishes"] = updated_points

    print(json.dumps(all_data))


def generateTeamData():
    teamlist = list(set(df['Constructor']))
    print(teamlist)

    teamDriverPair = {
        "Red Bull": ["Max Verstappen", "Sergio Perez"],
        "Mercedes": ["Lewis Hamilton", "George Russell"],
        "Aston Martin": ["Fernando Alonso", "Lance Stroll"],
        "Ferrar": ["Charles Leclerc", "Carlos Sainz"],
        "Alpine": ["Esteban Ocon", "Pierre Gasly"],
        "Haas": ["Nico Hulkenberg", "Kevin Magnussen"],
        "Mclaren": ["Lando Norris", "Oscar Piastri"],
        "AlphaTauri": ["Daniel Ricciardo", "Yuki Tsunoda"], 
        "Williams": ["Alex Albon", "Logan Sergeant"],
        "Alfa Romeo":["Zhou Guanyu", "Valterri Bottas"]
    }
    for key, value in teamDriverPair.items():
        teamPoints = 0
        teamPodiums = 0
        teamRaceWins = 0
        for i in value:
            


generateAllDriverData()