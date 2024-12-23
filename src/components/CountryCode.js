const countryCodes = [
    {id: 0, name: 'Afghanistan', code: 'AF', dialCode: '+93', label: 'Afghanistan', value: 0, phoneNumberLength: 9},
    {id: 1, name: 'Albania', code: 'AL', dialCode: '+355', label: 'Albania', value: 1, phoneNumberLength: 8},
    {id: 2, name: 'Algeria', code: 'DZ', dialCode: '+213', label: 'Algeria', value: 2, phoneNumberLength: 9},
    {id: 3, name: 'Andorra', code: 'AD', dialCode: '+376', label: 'Andorra', value: 3, phoneNumberLength: 6},
    {id: 4, name: 'Angola', code: 'AO', dialCode: '+244', label: 'Angola', value: 4, phoneNumberLength: 9},
    {id: 5, name: 'Antigua and Barbuda', code: 'AG', dialCode: '+1-268', label: 'Antigua and Barbuda', value: 5, phoneNumberLength: 7},
    {id: 6, name: 'Argentina', code: 'AR', dialCode: '+54', label: 'Argentina', value: 6, phoneNumberLength: 10},
    {id: 7, name: 'Armenia', code: 'AM', dialCode: '+374', label: 'Armenia', value: 7, phoneNumberLength: 8},
    {id: 8, name: 'Australia', code: 'AU', dialCode: '+61', label: 'Australia', value: 8, phoneNumberLength: 9},
    {id: 9, name: 'Austria', code: 'AT', dialCode: '+43', label: 'Austria', value: 9, phoneNumberLength: 10},
    {id: 10, name: 'Azerbaijan', code: 'AZ', dialCode: '+994', label: 'Azerbaijan', value: 10, phoneNumberLength: 9},
    {id: 11, name: 'Bahamas', code: 'BS', dialCode: '+1-242', label: 'Bahamas', value: 11, phoneNumberLength: 7},
    {id: 12, name: 'Bahrain', code: 'BH', dialCode: '+973', label: 'Bahrain', value: 12, phoneNumberLength: 8},
    {id: 13, name: 'Bangladesh', code: 'BD', dialCode: '+880', label: 'Bangladesh', value: 13, phoneNumberLength: 10},
    {id: 14, name: 'Barbados', code: 'BB', dialCode: '+1-246', label: 'Barbados', value: 14, phoneNumberLength: 7},
    {id: 15, name: 'Belarus', code: 'BY', dialCode: '+375', label: 'Belarus', value: 15, phoneNumberLength: 9},
    {id: 16, name: 'Belgium', code: 'BE', dialCode: '+32', label: 'Belgium', value: 16, phoneNumberLength: 9},
    {id: 17, name: 'Belize', code: 'BZ', dialCode: '+501', label: 'Belize', value: 17, phoneNumberLength: 7},
    {id: 18, name: 'Benin', code: 'BJ', dialCode: '+229', label: 'Benin', value: 18, phoneNumberLength: 8},
    {id: 19, name: 'Bhutan', code: 'BT', dialCode: '+975', label: 'Bhutan', value: 19, phoneNumberLength: 8},
    {id: 20, name: 'Bolivia', code: 'BO', dialCode: '+591', label: 'Bolivia', value: 20, phoneNumberLength: 8},
    {id: 21, name: 'Bosnia and Herzegovina', code: 'BA', dialCode: '+387', label: 'Bosnia and Herzegovina', value: 21, phoneNumberLength: 8},
    {id: 22, name: 'Botswana', code: 'BW', dialCode: '+267', label: 'Botswana', value: 22, phoneNumberLength: 8},
    {id: 23, name: 'Brazil', code: 'BR', dialCode: '+55', label: 'Brazil', value: 23, phoneNumberLength: 11},
    {id: 24, name: 'Brunei', code: 'BN', dialCode: '+673', label: 'Brunei', value: 24, phoneNumberLength: 7},
    {id: 25, name: 'Bulgaria', code: 'BG', dialCode: '+359', label: 'Bulgaria', value: 25, phoneNumberLength: 9},
    {id: 26, name: 'Burkina Faso', code: 'BF', dialCode: '+226', label: 'Burkina Faso', value: 26, phoneNumberLength: 8},
    {id: 27, name: 'Burundi', code: 'BI', dialCode: '+257', label: 'Burundi', value: 27, phoneNumberLength: 8},
    {id: 28, name: 'Cambodia', code: 'KH', dialCode: '+855', label: 'Cambodia', value: 28, phoneNumberLength: 9},
    {id: 29, name: 'Cameroon', code: 'CM', dialCode: '+237', label: 'Cameroon', value: 29, phoneNumberLength: 9},
    {id: 30, name: 'Canada', code: 'CA', dialCode: '+1', label: 'Canada', value: 30, phoneNumberLength: 10},
    {id: 31, name: 'Cape Verde', code: 'CV', dialCode: '+238', label: 'Cape Verde', value: 31, phoneNumberLength: 7},
    {id: 32, name: 'Central African Republic', code: 'CF', dialCode: '+236', label: 'Central African Republic', value: 32, phoneNumberLength: 8},
    {id: 33, name: 'Chad', code: 'TD', dialCode: '+235', label: 'Chad', value: 33, phoneNumberLength: 8},
    {id: 34, name: 'Chile', code: 'CL', dialCode: '+56', label: 'Chile', value: 34, phoneNumberLength: 9},
    {id: 35, name: 'China', code: 'CN', dialCode: '+86', label: 'China', value: 35, phoneNumberLength: 11},
    {id: 36, name: 'Colombia', code: 'CO', dialCode: '+57', label: 'Colombia', value: 36, phoneNumberLength: 10},
    {id: 37, name: 'Comoros', code: 'KM', dialCode: '+269', label: 'Comoros', value: 37, phoneNumberLength: 7},
    {id: 38, name: 'Congo', code: 'CG', dialCode: '+242', label: 'Congo', value: 38, phoneNumberLength: 9},
    {id: 39, name: 'Costa Rica', code: 'CR', dialCode: '+506', label: 'Costa Rica', value: 39, phoneNumberLength: 8},
    {id: 40, name: 'Croatia', code: 'HR', dialCode: '+385', label: 'Croatia', value: 40, phoneNumberLength: 9},
    {id: 41, name: 'Cuba', code: 'CU', dialCode: '+53', label: 'Cuba', value: 41, phoneNumberLength: 8},
    {id: 42, name: 'Cyprus', code: 'CY', dialCode: '+357', label: 'Cyprus', value: 42, phoneNumberLength: 8},
    {id: 43, name: 'Czech Republic', code: 'CZ', dialCode: '+420', label: 'Czech Republic', value: 43, phoneNumberLength: 9},
    {id: 44, name: 'Democratic Republic of the Congo', code: 'CD', dialCode: '+243', label: 'Democratic Republic of the Congo', value: 44, phoneNumberLength: 9},
    {id: 45, name: 'Denmark', code: 'DK', dialCode: '+45', label: 'Denmark', value: 45, phoneNumberLength: 8},
    {id: 46, name: 'Djibouti', code: 'DJ', dialCode: '+253', label: 'Djibouti', value: 46, phoneNumberLength: 8},
    {id: 47, name: 'Dominica', code: 'DM', dialCode: '+1-767', label: 'Dominica', value: 47, phoneNumberLength: 7},
    {id: 48, name: 'Dominican Republic', code: 'DO', dialCode: '+1-809', label: 'Dominican Republic', value: 48, phoneNumberLength: 10},
    {id: 49, name: 'East Timor', code: 'TL', dialCode: '+670', label: 'East Timor', value: 49, phoneNumberLength: 8},
    {id: 50, name: 'Ecuador', code: 'EC', dialCode: '+593', label: 'Ecuador', value: 50, phoneNumberLength: 9},
    {id: 51, name: 'Egypt', code: 'EG', dialCode: '+20', label: 'Egypt', value: 51, phoneNumberLength: 10},
    {id: 52, name: 'El Salvador', code: 'SV', dialCode: '+503', label: 'El Salvador', value: 52, phoneNumberLength: 8},
    {id: 53, name: 'Equatorial Guinea', code: 'GQ', dialCode: '+240', label: 'Equatorial Guinea', value: 53, phoneNumberLength: 9},
    {id: 54, name: 'Eritrea', code: 'ER', dialCode: '+291', label: 'Eritrea', value: 54, phoneNumberLength: 7},
    {id: 55, name: 'Estonia', code: 'EE', dialCode: '+372', label: 'Estonia', value: 55, phoneNumberLength: 9},
    {id: 56, name: 'Eswatini', code: 'SZ', dialCode: '+268', label: 'Eswatini', value: 56, phoneNumberLength: 8},
    {id: 57, name: 'Ethiopia', code: 'ET', dialCode: '+251', label: 'Ethiopia', value: 57, phoneNumberLength: 9},
    {id: 58, name: 'Fiji', code: 'FJ', dialCode: '+679', label: 'Fiji', value: 58, phoneNumberLength: 7},
    {id: 59, name: 'Finland', code: 'FI', dialCode: '+358', label: 'Finland', value: 59, phoneNumberLength: 9},
    {id: 60, name: 'France', code: 'FR', dialCode: '+33', label: 'France', value: 60, phoneNumberLength: 9},
    {id: 61, name: 'Gabon', code: 'GA', dialCode: '+241', label: 'Gabon', value: 61, phoneNumberLength: 8},
    {id: 62, name: 'Gambia', code: 'GM', dialCode: '+220', label: 'Gambia', value: 62, phoneNumberLength: 8},
    {id: 63, name: 'Georgia', code: 'GE', dialCode: '+995', label: 'Georgia', value: 63, phoneNumberLength: 9},
    {id: 64, name: 'Germany', code: 'DE', dialCode: '+49', label: 'Germany', value: 64, phoneNumberLength: 10},
    {id: 65, name: 'Ghana', code: 'GH', dialCode: '+233', label: 'Ghana', value: 65, phoneNumberLength: 9},
    {id: 66, name: 'Greece', code: 'GR', dialCode: '+30', label: 'Greece', value: 66, phoneNumberLength: 10},
    {id: 67, name: 'Grenada', code: 'GD', dialCode: '+1-473', label: 'Grenada', value: 67, phoneNumberLength: 7},
    {id: 68, name: 'Guatemala', code: 'GT', dialCode: '+502', label: 'Guatemala', value: 68, phoneNumberLength: 8},
    {id: 69, name: 'Guinea', code: 'GN', dialCode: '+224', label: 'Guinea', value: 69, phoneNumberLength: 9},
    {id: 70, name: 'Guinea-Bissau', code: 'GW', dialCode: '+245', label: 'Guinea-Bissau', value: 70, phoneNumberLength: 7},
    {id: 71, name: 'Guyana', code: 'GY', dialCode: '+592', label: 'Guyana', value: 71, phoneNumberLength: 7},
    {id: 72, name: 'Haiti', code: 'HT', dialCode: '+509', label: 'Haiti', value: 72, phoneNumberLength: 8},
    {id: 73, name: 'Honduras', code: 'HN', dialCode: '+504', label: 'Honduras', value: 73, phoneNumberLength: 8},
    {id: 74, name: 'Hungary', code: 'HU', dialCode: '+36', label: 'Hungary', value: 74, phoneNumberLength: 9},
    {id: 75, name: 'Iceland', code: 'IS', dialCode: '+354', label: 'Iceland', value: 75, phoneNumberLength: 7},
    {id: 76, name: 'India', code: 'IN', dialCode: '+91', label: 'India', value: 76, phoneNumberLength: 10},
    {id: 77, name: 'Indonesia', code: 'ID', dialCode: '+62', label: 'Indonesia', value: 77, phoneNumberLength: 10},
    {id: 78, name: 'Iran', code: 'IR', dialCode: '+98', label: 'Iran', value: 78, phoneNumberLength: 10},
    {id: 79, name: 'Iraq', code: 'IQ', dialCode: '+964', label: 'Iraq', value: 79, phoneNumberLength: 10},
    {id: 80, name: 'Ireland', code: 'IE', dialCode: '+353', label: 'Ireland', value: 80, phoneNumberLength: 9},
    {id: 81, name: 'Israel', code: 'IL', dialCode: '+972', label: 'Israel', value: 81, phoneNumberLength: 9},
    {id: 82, name: 'Italy', code: 'IT', dialCode: '+39', label: 'Italy', value: 82, phoneNumberLength: 10},
    {id: 83, name: 'Jamaica', code: 'JM', dialCode: '+1-876', label: 'Jamaica', value: 83, phoneNumberLength: 7},
    {id: 84, name: 'Japan', code: 'JP', dialCode: '+81', label: 'Japan', value: 84, phoneNumberLength: 10},
    {id: 85, name: 'Jordan', code: 'JO', dialCode: '+962', label: 'Jordan', value: 85, phoneNumberLength: 9},
    {id: 86, name: 'Kazakhstan', code: 'KZ', dialCode: '+7', label: 'Kazakhstan', value: 86, phoneNumberLength: 10},
    {id: 87, name: 'Kenya', code: 'KE', dialCode: '+254', label: 'Kenya', value: 87, phoneNumberLength: 9},
    {id: 88, name: 'Kiribati', code: 'KI', dialCode: '+686', label: 'Kiribati', value: 88, phoneNumberLength: 5},
    {id: 89, name: 'Kosovo', code: 'XK', dialCode: '+383', label: 'Kosovo', value: 89, phoneNumberLength: 8},
    {id: 90, name: 'Kuwait', code: 'KW', dialCode: '+965', label: 'Kuwait', value: 90, phoneNumberLength: 8},
    {id: 91, name: 'Kyrgyzstan', code: 'KG', dialCode: '+996', label: 'Kyrgyzstan', value: 91, phoneNumberLength: 9},
    {id: 92, name: 'Laos', code: 'LA', dialCode: '+856', label: 'Laos', value: 92, phoneNumberLength: 9},
    {id: 93, name: 'Latvia', code: 'LV', dialCode: '+371', label: 'Latvia', value: 93, phoneNumberLength: 8},
    {id: 94, name: 'Lebanon', code: 'LB', dialCode: '+961', label: 'Lebanon', value: 94, phoneNumberLength: 8},
    {id: 95, name: 'Lesotho', code: 'LS', dialCode: '+266', label: 'Lesotho', value: 95, phoneNumberLength: 8},
    {id: 96, name: 'Liberia', code: 'LR', dialCode: '+231', label: 'Liberia', value: 96, phoneNumberLength: 7},
    {id: 97, name: 'Libya', code: 'LY', dialCode: '+218', label: 'Libya', value: 97, phoneNumberLength: 10},
    {id: 98, name: 'Liechtenstein', code: 'LI', dialCode: '+423', label: 'Liechtenstein', value: 98, phoneNumberLength: 7},
    {id: 99, name: 'Lithuania', code: 'LT', dialCode: '+370', label: 'Lithuania', value: 99, phoneNumberLength: 8},
    {id: 100, name: 'Luxembourg', code: 'LU', dialCode: '+352', label: 'Luxembourg', value: 100, phoneNumberLength: 9},
    {id: 101, name: 'Madagascar', code: 'MG', dialCode: '+261', label: 'Madagascar', value: 101, phoneNumberLength: 9},
    {id: 102, name: 'Malawi', code: 'MW', dialCode: '+265', label: 'Malawi', value: 102, phoneNumberLength: 9},
    {id: 103, name: 'Malaysia', code: 'MY', dialCode: '+60', label: 'Malaysia', value: 103, phoneNumberLength: 10},
    {id: 104, name: 'Maldives', code: 'MV', dialCode: '+960', label: 'Maldives', value: 104, phoneNumberLength: 7},
    {id: 105, name: 'Mali', code: 'ML', dialCode: '+223', label: 'Mali', value: 105, phoneNumberLength: 8},
    {id: 106, name: 'Malta', code: 'MT', dialCode: '+356', label: 'Malta', value: 106, phoneNumberLength: 8},
    {id: 107, name: 'Marshall Islands', code: 'MH', dialCode: '+692', label: 'Marshall Islands', value: 107, phoneNumberLength: 7},
    {id: 108, name: 'Mauritania', code: 'MR', dialCode: '+222', label: 'Mauritania', value: 108, phoneNumberLength: 8},
    {id: 109, name: 'Mauritius', code: 'MU', dialCode: '+230', label: 'Mauritius', value: 109, phoneNumberLength: 8},
    {id: 110, name: 'Mexico', code: 'MX', dialCode: '+52', label: 'Mexico', value: 110, phoneNumberLength: 10},
    {id: 111, name: 'Micronesia', code: 'FM', dialCode: '+691', label: 'Micronesia', value: 111, phoneNumberLength: 7},
    {id: 112, name: 'Moldova', code: 'MD', dialCode: '+373', label: 'Moldova', value: 112, phoneNumberLength: 8},
    {id: 113, name: 'Monaco', code: 'MC', dialCode: '+377', label: 'Monaco', value: 113, phoneNumberLength: 9},
    {id: 114, name: 'Mongolia', code: 'MN', dialCode: '+976', label: 'Mongolia', value: 114, phoneNumberLength: 8},
    {id: 115, name: 'Montenegro', code: 'ME', dialCode: '+382', label: 'Montenegro', value: 115, phoneNumberLength: 8},
    {id: 116, name: 'Morocco', code: 'MA', dialCode: '+212', label: 'Morocco', value: 116, phoneNumberLength: 9},
    {id: 117, name: 'Mozambique', code: 'MZ', dialCode: '+258', label: 'Mozambique', value: 117, phoneNumberLength: 9},
    {id: 118, name: 'Myanmar', code: 'MM', dialCode: '+95', label: 'Myanmar', value: 118, phoneNumberLength: 9},
    {id: 119, name: 'Namibia', code: 'NA', dialCode: '+264', label: 'Namibia', value: 119, phoneNumberLength: 9},
    {id: 120, name: 'Nauru', code: 'NR', dialCode: '+674', label: 'Nauru', value: 120, phoneNumberLength: 7},
    {id: 121, name: 'Nepal', code: 'NP', dialCode: '+977', label: 'Nepal', value: 121, phoneNumberLength: 10},
    {id: 122, name: 'Netherlands', code: 'NL', dialCode: '+31', label: 'Netherlands', value: 122, phoneNumberLength: 9},
    {id: 123, name: 'New Zealand', code: 'NZ', dialCode: '+64', label: 'New Zealand', value: 123, phoneNumberLength: 9},
    {id: 124, name: 'Nicaragua', code: 'NI', dialCode: '+505', label: 'Nicaragua', value: 124, phoneNumberLength: 8},
    {id: 125, name: 'Niger', code: 'NE', dialCode: '+227', label: 'Niger', value: 125, phoneNumberLength: 8},
    {id: 126, name: 'Nigeria', code: 'NG', dialCode: '+234', label: 'Nigeria', value: 126, phoneNumberLength: 10},
    {id: 127, name: 'North Korea', code: 'KP', dialCode: '+850', label: 'North Korea', value: 127, phoneNumberLength: 10},
    {id: 128, name: 'North Macedonia', code: 'MK', dialCode: '+389', label: 'North Macedonia', value: 128, phoneNumberLength: 8},
    {id: 129, name: 'Norway', code: 'NO', dialCode: '+47', label: 'Norway', value: 129, phoneNumberLength: 8},
    {id: 130, name: 'Oman', code: 'OM', dialCode: '+968', label: 'Oman', value: 130, phoneNumberLength: 8},
    {id: 131, name: 'Pakistan', code: 'PK', dialCode: '+92', label: 'Pakistan', value: 131, phoneNumberLength: 10},
    {id: 132, name: 'Palau', code: 'PW', dialCode: '+680', label: 'Palau', value: 132, phoneNumberLength: 7},
    {id: 133, name: 'Palestine', code: 'PS', dialCode: '+970', label: 'Palestine', value: 133, phoneNumberLength: 9},
    {id: 134, name: 'Panama', code: 'PA', dialCode: '+507', label: 'Panama', value: 134, phoneNumberLength: 8},
    {id: 135, name: 'Papua New Guinea', code: 'PG', dialCode: '+675', label: 'Papua New Guinea', value: 135, phoneNumberLength: 8},
    {id: 136, name: 'Paraguay', code: 'PY', dialCode: '+595', label: 'Paraguay', value: 136, phoneNumberLength: 9},
    {id: 137, name: 'Peru', code: 'PE', dialCode: '+51', label: 'Peru', value: 137, phoneNumberLength: 9},
    {id: 138, name: 'Philippines', code: 'PH', dialCode: '+63', label: 'Philippines', value: 138, phoneNumberLength: 10},
    {id: 139, name: 'Poland', code: 'PL', dialCode: '+48', label: 'Poland', value: 139, phoneNumberLength: 9},
    {id: 140, name: 'Portugal', code: 'PT', dialCode: '+351', label: 'Portugal', value: 140, phoneNumberLength: 9},
    {id: 141, name: 'Qatar', code: 'QA', dialCode: '+974', label: 'Qatar', value: 141, phoneNumberLength: 8},
    {id: 142, name: 'Republic of the Congo', code: 'CG', dialCode: '+242', label: 'Republic of the Congo', value: 142, phoneNumberLength: 9},
    {id: 143, name: 'Romania', code: 'RO', dialCode: '+40', label: 'Romania', value: 143, phoneNumberLength: 10},
    {id: 144, name: 'Russia', code: 'RU', dialCode: '+7', label: 'Russia', value: 144, phoneNumberLength: 10},
    {id: 145, name: 'Rwanda', code: 'RW', dialCode: '+250', label: 'Rwanda', value: 145, phoneNumberLength: 9},
    {id: 146, name: 'Saint Kitts and Nevis', code: 'KN', dialCode: '+1-869', label: 'Saint Kitts and Nevis', value: 146, phoneNumberLength: 7},
    {id: 147, name: 'Saint Lucia', code: 'LC', dialCode: '+1-758', label: 'Saint Lucia', value: 147, phoneNumberLength: 7},
    {id: 148, name: 'Saint Vincent and the Grenadines', code: 'VC', dialCode: '+1-784', label: 'Saint Vincent and the Grenadines', value: 148, phoneNumberLength: 7},
    {id: 149, name: 'Samoa', code: 'WS', dialCode: '+685', label: 'Samoa', value: 149, phoneNumberLength: 7},
    {id: 150, name: 'San Marino', code: 'SM', dialCode: '+378', label: 'San Marino', value: 150, phoneNumberLength: 9},
    {id: 151, name: 'Sao Tome and Principe', code: 'ST', dialCode: '+239', label: 'Sao Tome and Principe', value: 151, phoneNumberLength: 7},
    {id: 152, name: 'Saudi Arabia', code: 'SA', dialCode: '+966', label: 'Saudi Arabia', value: 152, phoneNumberLength: 9},
    {id: 153, name: 'Senegal', code: 'SN', dialCode: '+221', label: 'Senegal', value: 153, phoneNumberLength: 9},
    {id: 154, name: 'Serbia', code: 'RS', dialCode: '+381', label: 'Serbia', value: 154, phoneNumberLength: 8},
    {id: 155, name: 'Seychelles', code: 'SC', dialCode: '+248', label: 'Seychelles', value: 155, phoneNumberLength: 7},
    {id: 156, name: 'Sierra Leone', code: 'SL', dialCode: '+232', label: 'Sierra Leone', value: 156, phoneNumberLength: 8},
    {id: 157, name: 'Singapore', code: 'SG', dialCode: '+65', label: 'Singapore', value: 157, phoneNumberLength: 8},
    {id: 158, name: 'Slovakia', code: 'SK', dialCode: '+421', label: 'Slovakia', value: 158, phoneNumberLength: 9},
    {id: 159, name: 'Slovenia', code: 'SI', dialCode: '+386', label: 'Slovenia', value: 159, phoneNumberLength: 8},
    {id: 160, name: 'Solomon Islands', code: 'SB', dialCode: '+677', label: 'Solomon Islands', value: 160, phoneNumberLength: 7},
    {id: 161, name: 'Somalia', code: 'SO', dialCode: '+252', label: 'Somalia', value: 161, phoneNumberLength: 7},
    {id: 162, name: 'South Africa', code: 'ZA', dialCode: '+27', label: 'South Africa', value: 162, phoneNumberLength: 9},
    {id: 163, name: 'South Korea', code: 'KR', dialCode: '+82', label: 'South Korea', value: 163, phoneNumberLength: 10},
    {id: 164, name: 'South Sudan', code: 'SS', dialCode: '+211', label: 'South Sudan', value: 164, phoneNumberLength: 9},
    {id: 165, name: 'Spain', code: 'ES', dialCode: '+34', label: 'Spain', value: 165, phoneNumberLength: 9},
    {id: 166, name: 'Sri Lanka', code: 'LK', dialCode: '+94', label: 'Sri Lanka', value: 166, phoneNumberLength: 10},
    {id: 167, name: 'Sudan', code: 'SD', dialCode: '+249', label: 'Sudan', value: 167, phoneNumberLength: 9},
    {id: 168, name: 'Suriname', code: 'SR', dialCode: '+597', label: 'Suriname', value: 168, phoneNumberLength: 7},
    {id: 169, name: 'Sweden', code: 'SE', dialCode: '+46', label: 'Sweden', value: 169, phoneNumberLength: 9},
    {id: 170, name: 'Switzerland', code: 'CH', dialCode: '+41', label: 'Switzerland', value: 170, phoneNumberLength: 9},
    {id: 171, name: 'Syria', code: 'SY', dialCode: '+963', label: 'Syria', value: 171, phoneNumberLength: 9},
    {id: 172, name: 'Taiwan', code: 'TW', dialCode: '+886', label: 'Taiwan', value: 172, phoneNumberLength: 9},
    {id: 173, name: 'Tajikistan', code: 'TJ', dialCode: '+992', label: 'Tajikistan', value: 173, phoneNumberLength: 9},
    {id: 174, name: 'Tanzania', code: 'TZ', dialCode: '+255', label: 'Tanzania', value: 174, phoneNumberLength: 9},
    {id: 175, name: 'Thailand', code: 'TH', dialCode: '+66', label: 'Thailand', value: 175, phoneNumberLength: 9},
    {id: 176, name: 'Togo', code: 'TG', dialCode: '+228', label: 'Togo', value: 176, phoneNumberLength: 8},
    {id: 177, name: 'Tonga', code: 'TO', dialCode: '+676', label: 'Tonga', value: 177, phoneNumberLength: 5},
    {id: 178, name: 'Trinidad and Tobago', code: 'TT', dialCode: '+1-868', label: 'Trinidad and Tobago', value: 178, phoneNumberLength: 7},
    {id: 179, name: 'Tunisia', code: 'TN', dialCode: '+216', label: 'Tunisia', value: 179, phoneNumberLength: 8},
    {id: 180, name: 'Turkey', code: 'TR', dialCode: '+90', label: 'Turkey', value: 180, phoneNumberLength: 10},
    {id: 181, name: 'Turkmenistan', code: 'TM', dialCode: '+993', label: 'Turkmenistan', value: 181, phoneNumberLength: 9},
    {id: 182, name: 'Tuvalu', code: 'TV', dialCode: '+688', label: 'Tuvalu', value: 182, phoneNumberLength: 5},
    {id: 183, name: 'Uganda', code: 'UG', dialCode: '+256', label: 'Uganda', value: 183, phoneNumberLength: 9},
    {id: 184, name: 'Ukraine', code: 'UA', dialCode: '+380', label: 'Ukraine', value: 184, phoneNumberLength: 9},
    {id: 185, name: 'United Arab Emirates', code: 'AE', dialCode: '+971', label: 'United Arab Emirates', value: 185, phoneNumberLength: 9},
    {id: 186, name: 'United Kingdom', code: 'GB', dialCode: '+44', label: 'United Kingdom', value: 186, phoneNumberLength: 10},
    {id: 187, name: 'United States', code: 'US', dialCode: '+1', label: 'United States', value: 187, phoneNumberLength: 10},
    {id: 188, name: 'Uruguay', code: 'UY', dialCode: '+598', label: 'Uruguay', value: 188, phoneNumberLength: 9},
    {id: 189, name: 'Uzbekistan', code: 'UZ', dialCode: '+998', label: 'Uzbekistan', value: 189, phoneNumberLength: 9},
    {id: 190, name: 'Vanuatu', code: 'VU', dialCode: '+678', label: 'Vanuatu', value: 190, phoneNumberLength: 7},
    {id: 191, name: 'Vatican City', code: 'VA', dialCode: '+379', label: 'Vatican City', value: 191, phoneNumberLength: 9},
    {id: 192, name: 'Venezuela', code: 'VE', dialCode: '+58', label: 'Venezuela', value: 192, phoneNumberLength: 10},
    {id: 193, name: 'Vietnam', code: 'VN', dialCode: '+84', label: 'Vietnam', value: 193, phoneNumberLength: 9},
    {id: 194, name: 'Yemen', code: 'YE', dialCode: '+967', label: 'Yemen', value: 194, phoneNumberLength: 9},
    {id: 195, name: 'Zambia', code: 'ZM', dialCode: '+260', label: 'Zambia', value: 195, phoneNumberLength: 9},
    {id: 196, name: 'Zimbabwe', code: 'ZW', dialCode: '+263', label: 'Zimbabwe', value: 196, phoneNumberLength: 9},
];


  
export default countryCodes