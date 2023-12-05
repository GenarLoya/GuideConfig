#!/bin/bash

# Carpeta que contiene los archivos .md
MD_FOLDER="MDs"

# Carpeta donde se guardarán los archivos PDF
PDF_FOLDER="PDFs"

# Comando base
BASE_COMMAND="mdpdf --gh-style --border=10mm --format=Letter"

# Iterar sobre los archivos .md en la carpeta
for file in "$MD_FOLDER"/*.md; do
    # Obtener el nombre del archivo sin extensión
    filename=$(basename -- "$file")
    filename_no_ext="${filename%.*}"

    # Ejecutar el comando para cada archivo y sobrescribir si es necesario
    $BASE_COMMAND "$file" -o "$PDF_FOLDER/$filename_no_ext.pdf" -f

    # Imprimir mensaje de progreso
    echo "Convertido $filename a $PDF_FOLDER/$filename_no_ext.pdf"
done

for file in "$MD_FOLDER"/*.pdf; do
    mv "$file" "$PDF_FOLDER"

    echo "Movido $file a $PDF_FOLDER"
done

