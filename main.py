import webview
from API import api_primaria

registro_voti=[]
agenda=[]

apiFinestra = api_primaria(registro_voti, agenda)

window = webview.create_window("Report Scolastico", "index.html", width=800, height=600, js_api=apiFinestra, min_size=(600,400))

webview.start(debug=True)