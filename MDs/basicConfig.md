# Configuracion basica de un router

## Router

```bash
enable
conf t
hostname R1
no ip domain-lookup
enable secret class

line console 0
password cisco
login

line vty 0 4
password cisco
login

exit

service password-encryption
ipv6 unicast-routing

do wr
```

## Switch

```bash
enable
conf t
hostname R1
no ip domain-lookup
enable secret class

line console 0
password cisco
login

line vty 0 4
password cisco
login

exit

service password-encryption
ipv6 unicast-routing

do wr
```
