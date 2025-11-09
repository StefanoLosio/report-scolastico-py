import webview
from API import api_primaria

registro_voti=[]
agenda=[{'Materia':'Mate', 'Data':'8-6-2025', 'Descrizione':'Compito pag 125 es dal 2 al 15'},]

apiFinestra = api_primaria(registro_voti, agenda)

window = webview.create_window("Report Scolastico", "index.html", width=800, height=600, js_api=apiFinestra, min_size=(600,400))

webview.start(debug=True)