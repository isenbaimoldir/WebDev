
def xyz_there(str):
  for i in range(len(str)):
    if(str[i:i+3] == "xyz" and str[i-1] != '.'):
      return True
  return False