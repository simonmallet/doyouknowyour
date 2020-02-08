#!/bin/bash

# Downloading pokemon images
if [ ! -f ~/pokemon-sugimori.tar.gz ]; then
  wget -P ~/ https://veekun.com/static/pokedex/downloads/pokemon-sugimori.tar.gz ~/
fi

# Extracting pokemon images in assets folder
mkdir src/assets/images/pokemon
tar xvzf ~/pokemon-sugimori.tar.gz -C src/assets/images/pokemon/. --strip=2

echo "Done!"
