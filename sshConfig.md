# Configuración básica de SSH

```bash
enable
sh ip ssh
conf t
ip domain-name cisco.com
crypto key generate rsa modulus 1024
username admin secret cisco
line vty 0 15
transport input ssh
login local
exit
ip ssh version 2
do wr
```
