USE TNCR;

# INSERT INTO MONITORING_FREQUENCY(FREQUENCY, SCHEDULE)
#     VALUES ('Cada hora', '0 0 * * * *'),
#            ('Cada 2 horas', '0 0 */2 * * *'),
#            ('Cada 6 horas', '0 0 */6 * * *'),
#            ('Cada 12 horas', '0 0 */12 * * *'),
#            ('Cada día', '0 0 12 * * *');

INSERT INTO MONITORING_FREQUENCY(FREQUENCY, SCHEDULE)
    VALUES ('Cada hora', '0 * * * * *'),
           ('Cada 2 horas', '0 */2 * * * *'),
           ('Cada 6 horas', '0 */6 * * * *'),
           ('Cada 12 horas', '0 */12 * * * *'),
           ('Cada día', '0 12 * * * *');


INSERT INTO MATERIAL(ID,NAME,CODE)
VALUES
(1, 'Oro', 'Ma_Or'),
(2, 'Plata', 'Ma_Plat'),
(3, 'Madera', 'Ma_Ma'),
(4, 'Acero', 'Ma_Ac'),
(5, 'Yeso', 'Ma_Ye'),
(6, 'Plástico', 'Ma_Plas'),
(7, 'Cobre', 'Ma_Co'),
(8, 'Vidrio', 'Ma_Vi'),
(9, 'Cerámica', 'Ma_Ce'),
(10, 'Cemento', 'Ma_Cem');

INSERT INTO VARIABLE(ID,NAME,CODE,UNIT)
VALUES
(1, 'Temperatura', 'Var_Te', 'C°'),
(2, 'Luz', 'Var_Lu', 'Luxes'),
(3, 'Particulas de CO2', 'Var_C02', 'µg/m3'),
(4, 'Humedad', 'Var_Hu', '%');

INSERT INTO BLOCK(ID, CODE, NAME, FLOOR) VALUES ('1', '2BA', 'Foyer norte (FN)', '2'),
('2', '1BA', 'Primer piso ', '1');

INSERT INTO ORIENTATION(ID, CODE, NAME) VALUES ('1', 'OE', 'Oeste-Este'),
('2', 'NS', 'Norte-Sur');

INSERT INTO CARDINAL_POINT(ID, CODE, NAME) VALUES ('1', 'N', 'Norte'),
('2', 'S', 'Sur'),
('3', 'E', 'Este'),
('4', 'O', 'Oeste');

INSERT INTO TECHNICAL_UNIT(ID, CODE, NAME) VALUES ('1', 'Ev', 'Estructuras verticales'),
('2', 'Eh', 'Estructuras horizontales'),
('3', 'Cv', 'Cerramientos verticales'),
('4', 'Ch', 'Cerramientos horizontales'),
('5', 'Cs', 'Cerramiento superior'),
('6', 'Div', 'Division interna vertical'),
('7', 'Fu', 'Fundaciones');

INSERT INTO ELEMENT_TYPE(ID, CODE, NAME, TECHNICAL_UNIT_ID) VALUES ('1', 'Mu', 'Muros', '1'),
('2', 'ViT', 'Vigas Transversales', '2'),
('3', 'ViL', 'Vigas Longitudinales', '2'),
('4', 'ViC', 'Vigas compuestas', '2'),
('5', 'VgMe', 'Viguetas de Metal', '2'),
('6', 'VgMa', 'Viguetas de Madera', '2'),
('7', 'PaP', 'Panos de pared', '3'),
('8', 'Zo', 'Zocalo', '3'),
('9', 'Fr', 'Friso', '3'),
('10', 'Ve', 'Ventanas', '3'),
('11', 'Pu', 'Puertas', '3'),
('12', 'Pi', 'Pilastras', '3'),
('13', 'SoP', 'Soporte de parquet', '4'),
('14', 'Pa', 'Parquet', '4'),
('15', 'Al', 'Alfombra', '4'),
('16', 'Ro', 'Rodapie', '4'),
('17', 'Gu', 'Guarnicion', '4'),
('18', 'Co', 'Cornisa', '4'),
('19', 'Cu', 'Cubierta', '5'),
('20', 'CiR', 'Cielo raso', '5'),
('21', 'Ce', 'Cerchas', '5'),
('22', 'Vi', 'Vigas', '5'),
('23', 'ViAH', 'Vigas de amarre horizontal', '5'),
('24', 'ViAI', 'Vigas de amarre inclinada', '5'),
('25', 'ViC', 'Vigas compuestas', '5'),
('26', 'Co', 'Columnas', '6'),
('27', 'CiC', 'Cimiento corrido', '7'),
('28', 'Mu', 'Muros', '7'),
('29', 'Lo', 'Losa', '7'),
('30', 'Pi', 'Piso', '7');

INSERT INTO ELEMENT(ID, CODE, NUMBER, ORIENTATION_ID, CARDINAL_POINT_ID, ELEMENT_TYPE_ID) VALUES ('1', '1-2BA_Ev_Mu_N', NULL, NULL, '1', '28'),
('2', '1-2BA_Ev_Mu_E', NULL, NULL, '3', '28'),
('3', '1-2BA_Ev_Mu_S', NULL, NULL, '2', '28'),
('4', '1-2BA_Ev_Mu_O', NULL, NULL, '4', '28'),
('5', '2BA_Eh_ViT_1OE', '1', '1', NULL, '2'),
('6', '2BA_Eh_ViT_2OE', '2', '1', NULL, '2'),
('7', '2BA_Eh_ViT_3OE', '3', '1', NULL, '2'),
('8', '2BA_Eh_ViT_4OE', '4', '1', NULL, '2'),
('9', '2BA_Eh_ViT_5OE', '5', '1', NULL, '2'),
('10', '2BA_Eh_ViT_6OE', '6', '1', NULL, '2'),
('11', '2BA_Eh_ViL_N', NULL, NULL, '1', '3'),
('12', '2BA_Eh_ViL_S', NULL, NULL, '2', '3'),
('13', '2BA_Eh_ViC_N', NULL, NULL, '1', '25'),
('14', '2BA_Eh_VgMe_1NS', '1', '2', NULL, '5'),
('15', '2BA_Eh_VgMe_2NS', '2', '2', NULL, '5'),
('16', '2BA_Eh_VgMe_3NS', '3', '2', NULL, '5'),
('17', '2BA_Eh_VgMe_4NS', '4', '2', NULL, '5'),
('18', '2BA_Eh_VgMe_5NS', '5', '2', NULL, '5'),
('19', '2BA_Eh_VgMe_6NS', '6', '2', NULL, '5'),
('20', '2BA_Eh_VgMe_7NS', '7', '2', NULL, '5'),
('21', '2BA_Eh_VgMe_8NS', '8', '2', NULL, '5'),
('22', '2BA_Eh_VgMe_9NS', '9', '2', NULL, '5'),
('23', '2BA_Eh_VgMe_10NS', '10', '2', NULL, '5'),
('24', '2BA_Eh_VgMa_1NS', '1', '2', NULL, '6'),
('25', '2BA_Eh_VgMa_2NS', '2', '2', NULL, '6'),
('26', '2BA_Eh_VgMa_3NS', '3', '2', NULL, '6'),
('27', '2BA_Eh_VgMa_4NS', '4', '2', NULL, '6'),
('28', '2BA_Eh_VgMa_5NS', '5', '2', NULL, '6'),
('29', '2BA_Eh_VgMa_6NS', '6', '2', NULL, '6'),
('30', '2BA_Eh_VgMa_7NS', '7', '2', NULL, '6'),
('31', '2BA_Eh_VgMa_8NS', '8', '2', NULL, '6'),
('32', '2BA_Eh_VgMa_9NS', '9', '2', NULL, '6'),
('33', '2BA_Eh_VgMa_10NS', '10', '2', NULL, '6'),
('34', '2BA_Cv_PaP_E-1NS', '1', '2', '3', '7'),
('35', '2BA_Cv_PaP_E-2NS', '2', '2', '3', '7'),
('36', '2BA_Cv_PaP_E-3NS', '3', '2', '3', '7'),
('37', '2BA_Cv_PaP_E-4NS', '4', '2', '3', '7'),
('38', '2BA_Cv_PaP_N-1OE', '1', '1', '1', '7'),
('39', '2BA_Cv_PaP_N-2OE', '2', '1', '1', '7'),
('40', '2BA_Cv_PaP_N-3OE', '3', '1', '1', '7'),
('41', '2BA_Cv_PaP_N-4OE', '4', '1', '1', '7'),
('42', '2BA_Cv_PaP_O-1NS', '1', '2', '4', '7'),
('43', '2BA_Cv_PaP_O-2NS', '2', '2', '4', '7'),
('44', '2BA_Cv_PaP_O-3NS', '3', '2', '4', '7'),
('45', '2BA_Cv_PaP_O-4NS', '4', '2', '4', '7'),
('46', '2BA_Cv_Zo_N', NULL, NULL, '1', '8'),
('47', '2BA_Cv_Zo_E', NULL, NULL, '3', '8'),
('48', '2BA_Cv_Zo_O', NULL, NULL, '4', '8'),
('49', '2BA_Cv_Fr_N', NULL, NULL, '1', '9'),
('50', '2BA_Cv_Fr_E', NULL, NULL, '3', '9'),
('51', '2BA_Cv_Fr_O', NULL, NULL, '4', '9'),
('52', '2BA_Cv_Ve_N-1OE', '1', '1', '1', '10'),
('53', '2BA_Cv_Ve_N-2OE', '2', '1', '1', '10'),
('54', '2BA_Cv_Ve_N-3OE', '3', '1', '1', '10'),
('55', '2BA_Cv_Ve_O-1NS', '1', '2', '4', '10'),
('56', '2BA_Cv_Ve_O-2NS', '2', '2', '4', '10'),
('57', '2BA_Cv_Ve_O-3NS', '3', '2', '4', '10'),
('58', '2BA_Cv_Pu_E-1NS', '1', '2', '3', '11'),
('59', '2BA_Cv_Pu_E-2NS', '2', '2', '3', '11'),
('60', '2BA_Cv_Pi_E', NULL, NULL, '3', '30'),
('61', '2BA_Cv_Pi_O', NULL, NULL, '4', '30'),
('62', '2BA_Ch_SoP', NULL, NULL, NULL, '13'),
('63', '2BA_Ch_Pa', NULL, NULL, NULL, '14'),
('64', '2BA_Ch_Al', NULL, NULL, NULL, '15'),
('65', '2BA_Ch_Ro_N', NULL, NULL, '1', '16'),
('66', '2BA_Ch_Ro_E', NULL, NULL, '3', '16'),
('67', '2BA_Ch_Ro_O', NULL, NULL, '4', '16'),
('68', '2BA_Ch_Gu_N', NULL, NULL, '1', '17'),
('69', '2BA_Ch_Gu_E', NULL, NULL, '3', '17'),
('70', '2BA_Ch_Gu_O', NULL, NULL, '4', '17'),
('71', '2BA_Ch_Co_N', NULL, NULL, '1', '26'),
('72', '2BA_Ch_Co_S', NULL, NULL, '2', '26'),
('73', '2BA_Ch_Co_E', NULL, NULL, '3', '26'),
('74', '2BA_Ch_Co_O', NULL, NULL, '4', '26'),
('75', '2BA_Cs_Cu_N', NULL, NULL, '1', '19'),
('76', '2BA_Cs_Cu_O', NULL, NULL, '4', '19'),
('77', '2BA_Cs_CiR', NULL, NULL, NULL, '20'),
('78', '2BA_Cs_Ce_1OE', '1', '1', NULL, '21'),
('79', '2BA_Cs_Ce_2OE', '2', '1', NULL, '21'),
('80', '2BA_Cs_Ce_3OE', '3', '1', NULL, '21'),
('81', '2BA_Cs_Ce_4OE', '4', '1', NULL, '21'),
('82', '2BA_Cs_Ce_5OE', '5', '1', NULL, '21'),
('83', '2BA_Cs_Vi_S', NULL, NULL, '2', '22'),
('84', '2BA_Cs_ViAH_N', NULL, NULL, '1', '23'),
('85', '2BA_Cs_ViAH_O', NULL, NULL, '4', '23'),
('86', '2BA_Cs_ViAI_N', NULL, NULL, '1', '24'),
('87', '2BA_Cs_ViAI_S', NULL, NULL, '2', '24'),
('88', '2BA_Cs_ViC_N', NULL, NULL, '1', '25'),
('89', '2BA_Cs_ViC_O', NULL, NULL, '4', '25'),
('90', '2BA_Div_Co_E', NULL, NULL, '3', '26'),
('91', '2BA_Div_Co_O', NULL, NULL, '4', '26'),
('92', '1BA_Fu_CiC_N', NULL, NULL, '1', '27'),
('93', '1BA_Fu_CiC_E', NULL, NULL, '3', '27'),
('94', '1BA_Fu_CiC_S', NULL, NULL, '2', '27'),
('95', '1BA_Fu_CiC_O', NULL, NULL, '4', '27'),
('96', '1BA_Ch_Lo', NULL, NULL, NULL, '29'),
('97', '1BA_Ch_Pi', NULL, NULL, NULL, '30');

INSERT INTO BLOCK_ELEMENT(ELEMENT_ID, BLOCK_ID) VALUES ('1', '2'),
('1', '1'),
('2', '2'),
('2', '1'),
('3', '2'),
('3', '1'),
('4', '2'),
('4', '1'),
('5', '1'),
('6', '1'),
('7', '1'),
('8', '1'),
('9', '1'),
('10', '1'),
('11', '1'),
('12', '1'),
('13', '1'),
('14', '1'),
('15', '1'),
('16', '1'),
('17', '1'),
('18', '1'),
('19', '1'),
('20', '1'),
('21', '1'),
('22', '1'),
('23', '1'),
('24', '1'),
('25', '1'),
('26', '1'),
('27', '1'),
('28', '1'),
('29', '1'),
('30', '1'),
('31', '1'),
('32', '1'),
('33', '1'),
('34', '1'),
('35', '1'),
('36', '1'),
('37', '1'),
('38', '1'),
('39', '1'),
('40', '1'),
('41', '1'),
('42', '1'),
('43', '1'),
('44', '1'),
('45', '1'),
('46', '1'),
('47', '1'),
('48', '1'),
('49', '1'),
('50', '1'),
('51', '1'),
('52', '1'),
('53', '1'),
('54', '1'),
('55', '1'),
('56', '1'),
('57', '1'),
('58', '1'),
('59', '1'),
('60', '1'),
('61', '1'),
('62', '1'),
('63', '1'),
('64', '1'),
('65', '1'),
('66', '1'),
('67', '1'),
('68', '1'),
('69', '1'),
('70', '1'),
('71', '1'),
('72', '1'),
('73', '1'),
('74', '1'),
('75', '1'),
('76', '1'),
('77', '1'),
('78', '1'),
('79', '1'),
('80', '1'),
('81', '1'),
('82', '1'),
('83', '1'),
('84', '1'),
('85', '1'),
('86', '1'),
('87', '1'),
('88', '1'),
('89', '1'),
('90', '1'),
('91', '1'),
('92', '2'),
('93', '2'),
('94', '2'),
('95', '2'),
('96', '2'),
('97', '2');


INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (1, 3, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (1, 7, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (2, 5, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (3, 2, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (3, 9, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (4, 1, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (5, 4, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (6, 8, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (6, 6, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (7, 10, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (8, 3, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (8, 7, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (9, 5, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (10, 1, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (11, 9, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (12, 2, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (12, 6, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (13, 4, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (14, 8, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (15, 7, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (16, 5, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (16, 10, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (17, 3, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (18, 6, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (19, 1, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (20, 4, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (20, 9, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (21, 2, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (22, 8, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (23, 5, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (23, 7, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (24, 10, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (25, 3, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (26, 6, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (27, 1, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (27, 4, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (28, 9, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (29, 2, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (30, 7, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (31, 5, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (31, 10, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (32, 3, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (33, 6, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (34, 8, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (35, 1, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (36, 4, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (36, 7, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (37, 9, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (38, 2, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (39, 6, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (39, 5, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (40, 10, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (41, 3, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (42, 8, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (43, 1, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (43, 7, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (44, 4, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (45, 9, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (46, 2, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (47, 6, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (47, 10, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (48, 3, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (49, 5, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (50, 1, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (50, 4, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (51, 9, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (52, 2, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (53, 8, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (53, 7, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (54, 6, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (55, 5, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (56, 3, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (56, 10, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (57, 1, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (58, 4, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (59, 2, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (59, 8, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (60, 7, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (61, 5, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (62, 3, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (62, 9, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (63, 6, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (64, 1, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (64, 4, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (65, 8, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (66, 7, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (66, 5, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (67, 10, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (68, 3, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (69, 6, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (69, 9, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (70, 1, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (71, 4, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (71, 7, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (72, 2, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (73, 5, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (74, 3, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (75, 8, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (75, 7, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (76, 6, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (77, 5, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (78, 1, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (78, 4, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (79, 9, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (80, 2, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (80, 8, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (81, 3, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (82, 6, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (82, 5, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (83, 10, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (84, 1, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (85, 4, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (85, 7, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (86, 2, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (87, 8, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (88, 5, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (88, 3, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (89, 9, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (90, 6, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (90, 1, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (91, 4, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (92, 2, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (92, 8, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (93, 7, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (94, 5, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (94, 3, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (95, 9, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (96, 6, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (96, 1, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (97, 4, '');
INSERT INTO ELEMENT_MATERIAL(ELEMENT_ID, MATERIAL_ID, REMARKS) VALUES (97, 8, '');

INSERT INTO MATERIAL_RANGE(MATERIAL_ID, VARIABLE_ID, MIN_RANGE, MAX_RANGE) VALUES
(1, 1, 0.0, 50.0),        -- Oro, Temperatura
(1, 2, 0.0, 925.0),     -- Oro, Luz
(1, 3, 400.0, 700.0),     -- Oro, Particulas de CO2

(2, 1, 0.0, 50.0),        -- Plata, Temperatura
(2, 2, 0.0, 10000.0),     -- Plata, Luz
(2, 3, 300.0, 700.0),     -- Plata, Particulas de CO2

(3, 1, -20.0, 40.0),      -- Madera, Temperatura
(3, 2, 0.0, 10000.0),     -- Madera, Luz
(3, 3, 300.0, 1000.0),    -- Madera, Particulas de CO2

(4, 1, 0.0, 50.0),        -- Acero, Temperatura
(4, 2, 0.0, 10000.0),     -- Acero, Luz
(4, 3, 300.0, 700.0),     -- Acero, Particulas de CO2

(5, 1, 0.0, 30.0),        -- Yeso, Temperatura
(5, 2, 0.0, 10000.0),     -- Yeso, Luz
(5, 3, 300.0, 700.0),     -- Yeso, Particulas de CO2

(6, 1, 0.0, 40.0),        -- Plástico, Temperatura
(6, 2, 0.0, 10000.0),     -- Plástico, Luz
(6, 3, 300.0, 1000.0),    -- Plástico, Particulas de CO2

(7, 1, 0.0, 50.0),        -- Cobre, Temperatura
(7, 2, 0.0, 10000.0),     -- Cobre, Luz
(7, 3, 300.0, 700.0),     -- Cobre, Particulas de CO2

(8, 1, 0.0, 50.0),        -- Vidrio, Temperatura
(8, 2, 0.0, 10000.0),     -- Vidrio, Luz
(8, 3, 300.0, 1000.0),    -- Vidrio, Particulas de CO2

(9, 1, 0.0, 50.0),        -- Cerámica, Temperatura
(9, 2, 0.0, 900.0),     -- Cerámica, Luz
(9, 3, 300.0, 700.0),     -- Cerámica, Particulas de CO2

(10, 1, 0.0, 50.0),       -- Cemento, Temperatura
(10, 2, 0.0, 10000.0),    -- Cemento, Luz
(10, 3, 300.0, 700.0);    -- Cemento, Particulas de CO2


INSERT INTO INSTRUMENT_TYPE(ID, TYPE) VALUES (1, 'Estático'), (2, 'Móvil');

INSERT INTO INSTRUMENT(ID, NAME, CODE, MODEL, ASSET_CODE, MONITORING_FREQUENCY_ID, BLOCK_ID, INSTRUMENT_TYPE_ID)
VALUES (1, 'Datalogger Ambiental Foyer Norte', '2BA_Bs_DaA', 'PLDA-05AD-A', 'TNCR-1', 1, 1, 1),
    (2, 'Datalogger de Iluminación Foyer Norte', '2BA_Bs_DaI', 'PLDA-05AD-B', 'TNCR-2', 1, 1, 1),
    (3, 'Datalogger Ambiental Primer Piso', '1BA_Bs_DaA', 'PLDA-05AD-C', 'TNCR-3', 1, 2, 1),
    (4, 'Datalogger de Iluminación Primer Piso', '1BA_Bs_DaI', 'PLDA-05AD-D', 'TNCR-4', 1, 2, 1);

INSERT INTO INSTRUMENT_VARIABLE(VARIABLE_ID, INSTRUMENT_ID) VALUES (1, 1), (3, 1), (2, 2), (1, 3),(3, 3), (2, 4);

INSERT INTO ALARM_STATUS(ID, VALUE) VALUES (1, 'ACTIVE'), (2, 'CHECKED');

INSERT INTO ALARM(ID, VARIABLE_ID, STATUS_ID, INSTRUMENT_ID, RAISED_DATE, REASON_OF_RAISE, AVG_VALUE, VARIANCE_VALUE, MAX_VALUE, MIN_VALUE, FROM_DATE, TO_DATE)
VALUES (1, 1, 1, 1, '2024-06-15T18:41:51.706Z', 'El valor de la temperatura para el material Yeso excedió el rango permitido', 32.0, 4.6, 34.0, 22.0, '2024-06-15T16:41:51.706Z', '2024-06-15T18:41:51.706Z'),
       (2, 2, 2, 4, '2024-06-14T16:32:51.706Z', 'El valor de la luz para el material cerámica excedió el rango permitido', 800.0, 120.0, 951.2, 102.0, '2024-06-14T10:32:51.706Z', '2024-06-14T16:32:51.706Z');


INSERT INTO WOUND(ID, NAME, CODE)
VALUES (1, 'Fisuras', 'Le_Fi'),
       (2, 'Alteraciones cromáticas', 'Le_AlCr'),
       (3, 'Deshidratación', 'Le_De'),
       (4, 'Corrosión', 'Le_Co'),
       (5, 'Eflorescencias', 'Le_Ef'),
       (6, 'Grietas', 'Le_Gr'),
       (7, 'Desintegración del material', 'Le_DeMa');

INSERT INTO WOUND_MATERIAL(WOUND_ID, MATERIAL_ID, VARIABLE_ID)
VALUES
(1, 5, 1), -- Fisuras, Yeso, Temperatura
(1, 5, 4), -- Fisuras, Yeso, Humedad
(1, 10, 1), -- Fisuras, Cemento, Temperatura
(1, 10, 4), -- Fisuras, Cemento, Humedad
(1, 9, 1), -- Fisuras, Cerámica, Temperatura
(1, 9, 4), -- Fisuras, Cerámica, Humedad
(1, 8, 1), -- Fisuras, Vidrio, Temperatura
(1, 8, 4), -- Fisuras, Vidrio, Humedad
(1, 3, 1), -- Fisuras, Madera, Temperatura
(1, 3, 4), -- Fisuras, Madera, Humedad
(2, 3, 2), -- Alteraciones cromáticas, Madera, Luz
(2, 3, 3), -- Alteraciones cromáticas, Madera, CO2
(2, 5, 2), -- Alteraciones cromáticas, Yeso, Luz
(2, 5, 3), -- Alteraciones cromáticas, Yeso, CO2
(2, 10, 2), -- Alteraciones cromáticas, Cemento, Luz
(2, 10, 3), -- Alteraciones cromáticas, Cemento, CO2
(2, 6, 2), -- Alteraciones cromáticas, Plástico, Luz
(2, 6, 3), -- Alteraciones cromáticas, Plástico, CO2
(2, 9, 2), -- Alteraciones cromáticas, Cerámica, Luz
(2, 9, 3), -- Alteraciones cromáticas, Cerámica, CO2
(2, 1, 2), -- Alteraciones cromáticas, Oro, Luz
(2, 1, 3), -- Alteraciones cromáticas, Oro, CO2
(3, 3, 1), -- Deshidratación, Madera, Temperatura
(3, 3, 4), -- Deshidratación, Madera, Humedad
(3, 3, 2), -- Deshidratación, Madera, Luz
(3, 5, 1), -- Deshidratación, Yeso, Temperatura
(3, 5, 4), -- Deshidratación, Yeso, Humedad
(3, 5, 2), -- Deshidratación, Yeso, Luz
(3, 10, 1), -- Deshidratación, Cemento, Temperatura
(3, 10, 4), -- Deshidratación, Cemento, Humedad
(3, 10, 2), -- Deshidratación, Cemento, Luz
(4, 4, 4), -- Corrosión, Acero, Humedad
(4, 4, 3), -- Corrosión, Acero, CO2
(4, 7, 4), -- Corrosión, Cobre, Humedad
(4, 7, 3), -- Corrosión, Cobre, CO2
(4, 2, 4), -- Corrosión, Plata, Humedad
(4, 2, 3), -- Corrosión, Plata, CO2
(4, 1, 4), -- Corrosión, Oro, Humedad
(4, 1, 3), -- Corrosión, Oro, CO2
(5, 10, 4), -- Eflorescencias, Cemento, Humedad
(5, 9, 4), -- Eflorescencias, Cerámica, Humedad
(5, 5, 4), -- Eflorescencias, Yeso, Humedad
(5, 3, 4), -- Eflorescencias, Madera, Humedad
(6, 5, 1), -- Grietas, Yeso, Temperatura
(6, 5, 4), -- Grietas, Yeso, Humedad
(6, 10, 1), -- Grietas, Cemento, Temperatura
(6, 10, 4), -- Grietas, Cemento, Humedad
(6, 9, 1), -- Grietas, Cerámica, Temperatura
(6, 9, 4), -- Grietas, Cerámica, Humedad
(6, 8, 1), -- Grietas, Vidrio, Temperatura
(6, 8, 4), -- Grietas, Vidrio, Humedad
(6, 3, 1), -- Grietas, Madera, Temperatura
(6, 3, 4), -- Grietas, Madera, Humedad
(7, 5, 4), -- Desintegración del material, Yeso, Humedad
(7, 5, 2), -- Desintegración del material, Yeso, Luz
(7, 5, 1), -- Desintegración del material, Yeso, Temperatura
(7, 10, 4), -- Desintegración del material, Cemento, Humedad
(7, 10, 2), -- Desintegración del material, Cemento, Luz
(7, 10, 1), -- Desintegración del material, Cemento, Temperatura
(7, 3, 4), -- Desintegración del material, Madera, Humedad
(7, 3, 2), -- Desintegración del material, Madera, Luz
(7, 3, 1), -- Desintegración del material, Madera, Temperatura
(7, 6, 4), -- Desintegración del material, Plástico, Humedad
(7, 6, 2), -- Desintegración del material, Plástico, Luz
(7, 6, 1), -- Desintegración del material, Plástico, Temperatura
(7, 9, 4), -- Desintegración del material, Cerámica, Humedad
(7, 9, 2), -- Desintegración del material, Cerámica, Luz
(7, 9, 1); -- Desintegración del material, Cerámica, Temperatura

