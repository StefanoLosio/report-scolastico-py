import webview

class api_primaria:
    def __init__(self, registro:list):
        self.registro=registro
    
    def getVoti (self):
        return self.registro
    
    def aggiungiVoto(self, voto:dict):
        self.registro.append(voto)
        db_voti = open("voti.csv", "a")
        db_voti.write(f'\n{voto["id"]};{voto["voto"]};{voto["descrizione"]};{voto["data"]};{voto["materia"]}')
        db_voti.close()

    def eliminaVoto (self, id:int):
        db_voti = open("voti.csv", "w")
        i=0
        for voto in self.registro:
            if voto["id"]==id:
                self.registro.pop(i)
            else:
                db_voti.write(f'{voto["id"]};{voto["voto"]};{voto["descrizione"]};{voto["data"]};{voto["materia"]}\n')
            i=i+1
        db_voti.close()
    
    def modificaVoto (self, id:int, nuovo_voto:dict):
        db_voti = open("voti.csv", "w")
        i=0
        for voto in self.registro:
            if voto["id"]==id:
                self.registro[i]=nuovo_voto
            i=i+1
            db_voti.write(f'{voto["id"]};{voto["voto"]};{voto["descrizione"]};{voto["data"]};{voto["materia"]}\n')
        db_voti.close()
                

class api_secondaria:
    def __init__(self, registro:list):
        self.registro=registro

    def apriSubWindow(self, type:str):
        if type=="inserimento":
            window = webview.create_window("Inserisci Voto", "inserimento.html", width=400, height=600, js_api=self, resizable=False)
            self.finestra=window
        elif type=="modifica":
            window = webview.create_window("Modifica Voto", "modifica.html", width=400, height=600, js_api=self, resizable=False)
            self.finestra=window