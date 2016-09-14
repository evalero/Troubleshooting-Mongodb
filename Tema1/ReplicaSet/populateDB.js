db=db.getSiblingDB("miBD");

print ("introduciendo datos en la BBDD miBD")

for (i=0 ; i < 10000 ; i ++) {
   db.muchosDatos.insert({x:i,y:i+2,z:i*2})
}
print("Configuración original del replica set :");
printjson(rs.config());
