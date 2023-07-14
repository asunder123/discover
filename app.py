# app.py
from flask import Flask, render_template, jsonify
import psutil
import random

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/updated_data')
def updated_data():
    # Simulating random data for demonstration purposes
    cpu_time_series = {
        'time': ['t1', 't2', 't3', 't4', 't5'],
        'values': [random.randint(0, 100) for _ in range(5)]
    }

    memory_time_series = {
        'time': ['t1', 't2', 't3', 't4', 't5'],
        'values': [random.randint(0, 100) for _ in range(5)]
    }

    processes = []
    for process in psutil.process_iter(['name', 'cpu_percent']):
        processes.append({
            'name': process.info['name'],
            'cpuUsage': process.info['cpu_percent']
        })

    dependency = {
        'nodes': [
            {'id': 'Node 1'},
            {'id': 'Node 2'},
            {'id': 'Node 3'},
            {'id': 'Node 4'},
            {'id': 'Node 5'}
        ],
        'links': [
            {'source': 'Node 1', 'target': 'Node 2', 'value': 1},
            {'source': 'Node 2', 'target': 'Node 3', 'value': 1},
            {'source': 'Node 3', 'target': 'Node 4', 'value': 1},
            {'source': 'Node 4', 'target': 'Node 5', 'value': 1},
            {'source': 'Node 5', 'target': 'Node 1', 'value': 1}
        ]
    }

    data = {
        'cpuTimeSeries': cpu_time_series,
        'memoryTimeSeries': memory_time_series,
        'processes': processes,
        'dependency': dependency
    }

    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
