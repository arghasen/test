import requests
import datetime

base_url="https://www.simcompanies.com/api/v1/market-ticker/"
def getdata():
    current_time = datetime.datetime(2019,8,11,0,0,0,000).isoformat()
    #2019-08-06T03:02:00.000Z/
    for i in range 
    url_to_get =base_url+current_time
    print(url_to_get)
    response = requests.get(url_to_get)
    print(response.content)

if __name__ == "__main__":
    getdata()