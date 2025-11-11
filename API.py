import webview

class api_primaria:
    def __init__(self, registro:list, agenda:list):
        self.registro=registro
        self.agenda=agenda
    
    def getVoti (self):
        return self.registro
    
    def getAssegnazioni (self, dataEvento:str):
        eventi=[]
        for i in self.agenda:
            if i["Data"]==dataEvento:
                eventi.append(i)
        return eventi
    
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

    def apriInsersciVoto(self):
        api_sec=api_secondaria(self.registro, self.agenda)
        api_sec.apriSubWindow("inserimento_voto")

    def nuovaAssegnazione(self):
        api_sec=api_secondaria(self.registro, self.agenda)
        api_sec.apriSubWindow("inserimento_assegnazione")
                

class api_secondaria:
    def __init__(self, registro:list, agenda:list):
        self.registro=registro
        self.agenda=agenda

    def apriSubWindow(self, type:str):
        if type=="inserimento_voto":
            window = webview.create_window("Inserisci Voto", "inserimento.html", width=400, height=600, js_api=self, resizable=False)
            self.finestra=window
        elif type=="modifica_voto":
            window = webview.create_window("Modifica Voto", "modifica.html", width=400, height=600, js_api=self, resizable=False)
            self.finestra=window
        elif type=="inserimento_assegnazione":
            window = webview.create_window("Inserisci Assegnazione", "assegnazioni.html", width=500, height=500, js_api=self, resizable=False)
            self.finestra=window
        elif type=="modifica_assegnazione":
            window = webview.create_window("Modifica Assegnazione", "modifica.html", width=400, height=600, js_api=self, resizable=False)
            self.finestra=window
    
    def setAssegnazione(self, materia_input:str, data_input:str, tipoAssegnazione_input:str, descrizione_input:str):
        assegnazione = {}

        assegnazione['Materia']=materia_input
        assegnazione['Data']=data_input
        assegnazione['Tipologia']=tipoAssegnazione_input
        assegnazione['Descrizione']=descrizione_input

        self.agenda.append(assegnazione)
        self.finestra.destroy()

