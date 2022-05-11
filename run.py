import subprocess

res = subprocess.Popen("ls ./assets", stdout=subprocess.PIPE, stderr=None, shell=True)


