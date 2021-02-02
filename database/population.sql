USE heroku_6b813a9a5dace8a;

insert into
    status (idstatus, descricao)
values
    (1, 'Já vi'),
    (2, 'Quero ver');

insert into
    serie (
        idserie,
        nomeserie,
        anolancamento,
        numtemporadas,
        sinopse,
        categoria,
        status
    )
values
    (
        1,
        'Breaking Bad',
        2008,
        5,
        'O novo drama Breaking Bad narra a história de Walter White (Bryan Cranston), um humilde professor de química que vê sua vida se transformar quando descobre ser portador de um câncer terminal.',
        'Ação',
        1
    ),
    (
        2,
        'Supernatural',
        2005,
        15,
        'A série segue os irmãos Sam e Dean Winchester enquanto procuram por seu pai, John, que está caçando o demônio que matou a mãe deles e a namorada de Sam. Durante suas viagens, eles usam o diário de seu pai para ajudá-los a continuar o negócio da família—salvar pessoas e caçar criaturas sobrenaturais.',
        'Terror',
        2
    );