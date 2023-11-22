import openpyxl as op
import json

book = op.load_workbook('parsed_demo.xlsx')
sheet = book['UF_Comms']

moves_dict = dict()

start_row, end_row = 2, 23
start_col, end_col = 2, 23

keys = []
for key in sheet['B1:W1'][0]:
    keys.append(key.value)

print(f'Keys: {keys}')


offset = 2

for row in range(start_row, end_row+1):
    for col in range(start_col, end_col+1):
        cell = sheet.cell(row=row, column=col)
        bg_color = cell.fill.start_color.rgb if cell.fill.start_color else None
        print(f'Fila: {keys[cell.row -offset]} | Columna: {keys[cell.column-offset]} | Valor: {cell.value} | Color: {bg_color[2::]}')
        cell_key = keys[cell.row -offset][0]+keys[cell.column-offset][0]
        moves_dict[cell_key] = {
            'value':cell.value,
            'color':f'#{bg_color[2::]}'
        }

with open('data.json', 'w') as json_file:
    json.dump(moves_dict, json_file)

book.close()