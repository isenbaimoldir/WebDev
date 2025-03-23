import numpy as np
x, y, z = map(int,input().split())

ar1 = []
ar2 = []
for i in range(x):
    ar1.append(list(map(int, input().split())))

for i in range(y):
    ar2.append(list(map(int, input().split())))

ar1 = np.array(ar1)
ar2 = np.array(ar2)

res = np.concatenate((ar1, ar2), axis = 0)

print(res)