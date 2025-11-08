
def ripristinaVoti(registro: list):
    voto = {}
    db_voti = open("voti.csv", "r")
    lines = db_voti.readlines()
    for line in lines:
        if line:
            for i in line.split(";"):
                voto["voto"]=i
                voto["descrizione"]=i
                voto["data"]=i
                voto["materia"]=i

            registro.append(voto)
    db_voti.close()