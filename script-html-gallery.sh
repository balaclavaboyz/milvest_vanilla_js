#!/bin/bash
i=1

until [ $i -gt 17 ]
do
	if [ $i -gt 10 ]
	then
    echo "<img loading='lazy' src='/static/$i.webp' alt='image da galeria'/>"
    ((i=i+1))
	else
	echo "<img src='/static/$i.webp' alt='image da galeria'/>"
    ((i=i+1))
	fi
done
