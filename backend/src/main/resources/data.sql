insert into user_details(id, birth_date, name)
values(1001, current_date(), 'Ram');

insert into user_details(id, birth_date, name)
values(1002, current_date(), 'Shyam');

insert into user_details(id, birth_date, name)
values(1003, current_date(), 'Ryal');

insert into post(id, description, user_id)
values(2001, 'MAGA is bs', 1001);

insert into post(id, description, user_id)
values(2002, 'Sem endsssss', 1002);

insert into post(id, description, user_id)
values(2003, 'Stop eating burgers', 1001);

insert into todo(id, description, done, target_date, username)
values(1001, 'Finish Ginny&Georgia', false, CURRENT_DATE(), 'vaishnavi');

insert into todo(id, description, done, target_date, username)
values(1002, 'Complete this godamnn course asap', false, CURRENT_DATE(), 'vaishnavi');

insert into todo(id, description, done, target_date, username)
values(1003, 'Enough roaming, start foaming', false, CURRENT_DATE(), 'vaishnavi');