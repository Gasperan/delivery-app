import sys
from geopy.distance import geodesic

origin_latitude = sys.argv[1]
origin_longitude = sys.argv[2]

destination_latitude = sys.argv[3]
destination_longitude = sys.argv[4]

origin_point = (origin_latitude, origin_longitude)
destination_point = (destination_latitude, destination_longitude)

print(geodesic(origin_point, destination_point).km)