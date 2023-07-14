from flask import Flask, render_template, jsonify
import psutil

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/discover')
def discover():
    processes = get_process_data()
    return render_template('discover.html', processes=processes)

@app.route('/get_process_data')
def get_process_data():
    process_list = []
    for proc in psutil.process_iter(['pid', 'name', 'cpu_percent', 'memory_percent']):
        process = {
            'pid': proc.info['pid'],
            'name': proc.info['name'],
            'cpu_usage': proc.info['cpu_percent'],
            'memory_usage': proc.info['memory_percent']
        }
        process_list.append(process)
    return jsonify(process_list)

if __name__ == '__main__':
    app.run(debug=True)
