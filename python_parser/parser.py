import openpyxl as op
import json

book = op.load_workbook('parsed_demo.xlsx')
sheet_UF = book['UF_Comms']
sheet_UFR = book['UFR Comms']

moves_dict = dict()

start_row, end_row = 2, 23
start_col, end_col = 2, 23

keys = []
for key in sheet_UF['B1:W1'][0]:
    keys.append(key.value)

print(f'Keys: {keys}')


offset = 2

for row in range(start_row, end_row+1):
    for col in range(start_col, end_col+1):
        UF_cell = sheet_UF.cell(row=row, column=col)
        UFR_cell = sheet_UFR.cell(row=row, column=col)
        UF_bg_color = UF_cell.fill.start_color.rgb if UF_cell.fill.start_color else 'FFFFFFFF'
        UFR_bg_color = UFR_cell.fill.start_color.rgb if UFR_cell.fill.start_color else 'FFFFFFFF'
        print(f'Fila: {keys[UF_cell.row -offset]} | Columna: {keys[UF_cell.column-offset]} | UF Valor: {UF_cell.value} | UF Color: {UF_bg_color[2::]} ')
        cell_key = keys[UF_cell.row -offset][0]+keys[UF_cell.column-offset][0]
        moves_dict[cell_key] = {
            'UF_value':UF_cell.value,
            'UF_color':f'#{UF_bg_color[2::]}',
            'UFR_value': UFR_cell.value,
            'UFR_color': f'#{UFR_bg_color[2::]}'
        }

with open('data.json', 'w') as json_file:
    json.dump(moves_dict, json_file)

book.close()