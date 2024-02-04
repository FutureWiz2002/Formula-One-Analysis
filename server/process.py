import pandas as pd

dataframe = pd.read_csv("F1_2023.csv", encoding='latin-1')

print(dataframe)

def driverProfile():
    for i in dataframe.