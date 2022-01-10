
const cliente = {
    codigo: 16532,
    nome: 'Edson',
    vip: true,
    endereco: {
        rua: 'Rua Abc',
        numero: 123,
        complemento: 'Casa 1',
        pontosRef: [
            'Hospital X',
            'Shopping Y'
        ]
    },
    nomeFilhos: [
        'Bia',
        'Carlos'
    ]
};

//formas de acessar o objeto
console.log(cliente['endereco']['rua']);
console.log(cliente.endereco.rua);
console.log(cliente.endereco.pontosRef[1]);