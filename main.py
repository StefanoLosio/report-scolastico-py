import webview
from API import api_primaria

registro_voti=[]
agenda=[]

apiFinestra = api_primaria(registro_voti, agenda)

window = webview.create_window("Report Scolastico", "index.html", width=800, height=700, js_api=apiFinestra, min_size=(600,600))

webview.start(debug=True)