import {TitleBlock, ImageBlock, ColumnsBlock, TextBlock} from './classes/blocks'
import image from './asserts/image.png'

export const model = [
    new TitleBlock('Конструктор сайтов на JS', {
        tag: 'h2',
        styles: {
            'background': 'linear-gradient(to right, #ff0099, #483240)',
            'color': '#fff',
            'padding': '1.5rem',
            'text-align': 'center'
        }
    }),
    new ImageBlock('image', image, {
        styles: {
            'padding': '2rem 0',
            'display': 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            'width': '500px',
            'height': 'auto'
        },
        alt: 'image.png'
    }),
    new ColumnsBlock([
        'Col 1 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse minima obcaecati perferendis soluta tempore voluptate!',
        'Col 2 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse minima obcaecati perferendis soluta tempore voluptate!',
        'Col 3 - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse minima obcaecati perferendis soluta tempore voluptate!',
    ], {styles: {
            'background': 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            'padding': '2rem',
            'color': '#fff',
            'font-weight': 'bold'
        }}),
    new TextBlock('Text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, voluptas!', {
        styles: {
            'background': 'linear-gradient(to left, #f2994a, #f2c94c)',
            'padding': '1rem',
            'font-weight': 'bold'
        }
    })
]
