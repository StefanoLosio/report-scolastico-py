class api_primaria:
    def __init__(self, registro:list):
        self.registro=registro
    
    def getVoti (self):
        return self.registro
    
    def aggiungiVoto(self, voto:dict):
        self.registro.append(voto)

    def eliminaVoto (self, id:int):
        i=0
        for voto in self.registro:
            if voto["id"]==id:
                self.registro.pop(i)
            i=i+1
    
    def modificaVoto (self, id:int, nuovo_voto:dict):
        i=0
        for voto in self.registro:
            if voto["id"]==id:
                self.registro[i]=nuovo_voto
            i=i+1
                

#class api_secondaria:
