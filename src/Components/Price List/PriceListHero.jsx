import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
  Wrap,
} from '@chakra-ui/react';
import Data from '../../Data/PriceListData.json';
import HeroImage from '../Images/spinwash.webp';
import SearchBar from './SearchBar';
import { motion } from 'framer-motion';

const SearchData = [
  {
    name: 'Two-Piece Suit',
    price: '£11.95',
    parentId: 'Dry Cleaning',
    id: 0,
  },
  {
    name: 'Three Piece Suit',
    price: '£15.95',
    parentId: 'Dry Cleaning',
    id: 1,
  },
  {
    name: 'Dinner suit/ Tuxedo',
    price: '£14.95',
    parentId: 'Dry Cleaning',
    id: 2,
  },
  {
    name: 'Dinner Jacket',
    price: '£8.95',
    parentId: 'Dry Cleaning',
    id: 3,
  },
  {
    name: 'Dinner Trouser',
    price: '£6.50',
    parentId: 'Dry Cleaning',
    id: 4,
  },
  {
    name: 'Dress Suit',
    price: '£16.95',
    parentId: 'Dry Cleaning',
    id: 5,
  },
  {
    name: 'Dress',
    price: 'Starting from £10.95',
    parentId: 'Dry Cleaning',
    id: 6,
  },
  {
    name: 'Delicate Dress/ Evening Dress',
    price: '£16.95',
    parentId: 'Dry Cleaning',
    id: 6,
  },
  {
    name: 'Skirt',
    price: 'From £6.50',
    parentId: 'Dry Cleaning',
    id: 7,
  },
  {
    name: 'Trouser',
    price: '£5.95',
    parentId: 'Dry Cleaning',
    id: 8,
  },
  {
    name: 'Jean',
    price: '£5.95',
    parentId: 'Dry Cleaning',
    id: 9,
  },
  {
    name: 'Jacket/ Blazer',
    price: '£7.95',
    parentId: 'Dry Cleaning',
    id: 10,
  },
  {
    name: 'Jacket (Silk)',
    price: '£8.95',
    parentId: 'Dry Cleaning',
    id: 11,
  },
  {
    name: 'Light Knitwear',
    price: '£6.50',
    parentId: 'Dry Cleaning',
    id: 12,
  },
  {
    name: 'Heavy Knitwear',
    price: '£7.50',
    parentId: 'Dry Cleaning',
    id: 13,
  },
  {
    name: 'Top',
    price: '£7.50',
    parentId: 'Dry Cleaning',
    id: 0,
  },
  {
    name: 'Blouse',
    price: '£7.50',
    parentId: 'Dry Cleaning',
    id: 14,
  },
  {
    name: 'Jumper',
    price: '£6.95',
    parentId: 'Dry Cleaning',
    id: 15,
  },
  {
    name: 'Men`s Shirt',
    price: '£3.95',
    parentId: 'Dry Cleaning',
    id: 16,
  },
  {
    name: 'Ladies Shirt',
    price: '£4.50',
    parentId: 'Dry Cleaning',
    id: 17,
  },
  {
    name: 'Polo T-shirt',
    price: '£4.50',
    parentId: 'Dry Cleaning',
    id: 18,
  },
  {
    name: 'T Shirt',
    price: '£3.95',
    parentId: 'Dry Cleaning',
    id: 19,
  },
  {
    name: 'Waistcoat',
    price: '£4.95',
    parentId: 'Dry Cleaning',
    id: 20,
  },
  {
    name: 'Tie',
    price: '£3.95',
    parentId: 'Dry Cleaning',
    id: 21,
  },
  {
    name: 'Scarf',
    price: '£6.50',
    parentId: 'Dry Cleaning',
    id: 22,
  },
  {
    name: 'Gown',
    price: '£10.50',
    parentId: 'Dry Cleaning',
    id: 23,
  },
  {
    name: 'Shawl',
    price: '£8.50',
    parentId: 'Dry Cleaning',
    id: 24,
  },
  {
    name: 'Hoodie',
    price: '£9.95',
    parentId: 'Dry Cleaning',
    id: 25,
  },
  {
    name: 'Coat',
    price: 'From £11.95',
    parentId: 'Dry Cleaning',
    id: 26,
  },
  {
    name: 'Rain Coat/Mac',
    price: 'from £13.50',
    parentId: 'Dry Cleaning',
    id: 27,
  },
  {
    name: 'Puffer Jacket',
    price: 'From £18.50',
    parentId: 'Dry Cleaning',
    id: 28,
  },
  {
    name: 'Cashmere Knitwear ',
    price: '£7.95',
    parentId: 'Dry Cleaning',
    id: 29,
  },
  {
    name: 'Jumpsuit',
    price: '£11.50',
    parentId: 'Dry Cleaning',
    id: 30,
  },
  {
    name: 'Kurta',
    price: '£18.95',
    parentId: 'Dry Cleaning',
    id: 31,
  },
  {
    name: 'Burberry Coat',
    price: '£40.00',
    parentId: 'Dry Cleaning',
    id: 32,
  },
  {
    name: 'Canada Goose Coat',
    price: '£45.00',
    parentId: 'Dry Cleaning',
    id: 33,
  },
  {
    name: 'Moncler Coat',
    price: '£45.00',
    parentId: 'Dry Cleaning',
    id: 34,
  },
  {
    name: 'Wedding Dress',
    price: 'Starting from £95.00',
    parentId: 'Dry Cleaning',
    id: 35,
  },
  {
    name: 'Men’s Shirt (Dry Clean)',
    price: '£3.95',
    parentId: 'Shirt Service',
    id: 36,
  },
  {
    name: 'Men’s Shirt - Less Than 10 (Wash & Press)',
    price: '£2.95',
    parentId: 'Shirt Service',
    id: 37,
  },
  {
    name: 'Men’s Shirt - 10 or More (Wash & Press) ',
    price: '£2.50',
    parentId: 'Shirt Service',
    id: 38,
  },
  {
    name: 'Men’s Shirt (Iron only)',
    price: '£1.95',
    parentId: 'Shirt Service',
    id: 39,
  },
  {
    name: 'Men’s Shirt (Folded)',
    price: '£0.50p per shirt',
    parentId: 'Shirt Service',
    id: 40,
  },
  {
    name: 'Ladies Shirt (Dry Clean)',
    price: '£4.50',
    parentId: 'Shirt Service',
    id: 41,
  },
  {
    name: 'Ladies Shirt (Wash & Press)',
    price: '£3.50',
    parentId: 'Shirt Service',
    id: 42,
  },
  {
    name: 'Ladies Shirt (Iron only)',
    price: '£2.50',
    parentId: 'Shirt Service',
    id: 43,
  },
  {
    name: 'Dress (Wash & Press)',
    price: '£9.50',
    parentId: 'Laundry',
    id: 44,
  },
  {
    name: 'Gloves (Wash & Press)',
    price: '£4.50',
    parentId: 'Laundry',
    id: 45,
  },
  {
    name: 'Handkerchief (Wash & Press)',
    price: '£1.50',
    parentId: 'Laundry',
    id: 46,
  },
  {
    name: 'Face Mask - Wash & Press',
    price: '£1.00',
    parentId: 'Laundry',
    id: 47,
  },
  {
    name: 'Jacket/ Blazer - Wash & Press',
    price: '£7.50',
    parentId: 'Laundry',
    id: 48,
  },
  {
    name: 'Jeans - Wash & Press',
    price: '£5.50',
    parentId: 'Laundry',
    id: 49,
  },
  {
    name: 'Jumper - Wash & Press',
    price: '£6.50',
    parentId: 'Laundry',
    id: 50,
  },
  {
    name: 'Polo Shirt - Wash & Press',
    price: '£3.95',
    parentId: 'Laundry',
    id: 51,
  },
  {
    name: 'Pyjamas - Wash & Press',
    price: '£4.50',
    parentId: 'Laundry',
    id: 52,
  },
  {
    name: 'Scarf - Wash & Press',
    price: '£5.95',
    parentId: 'Laundry',
    id: 53,
  },
  {
    name: 'Shorts - Wash & Press',
    price: '£4.95',
    parentId: 'Laundry',
    id: 54,
  },
  {
    name: 'Skirt - Wash & Press',
    price: '£5.95',
    parentId: 'Laundry',
    id: 55,
  },
  {
    name: 'Top - Wash & Press',
    price: '£6.95',
    parentId: 'Laundry',
    id: 56,
  },
  {
    name: 'Tracksuit - Wash & Press',
    price: '£10.95',
    parentId: 'Laundry',
    id: 57,
  },
  {
    name: 'Trousers - Wash & Press',
    price: '£5.50',
    parentId: 'Laundry',
    id: 58,
  },
  {
    name: 'T-Shirt - Wash & Press',
    price: '£3.50',
    parentId: 'Laundry',
    id: 59,
  },
  {
    name: '  Vest - Wash & Press',
    price: '£1.50',
    parentId: 'Laundry',
    id: 60,
  },
  {
    name: 'Leggings (Wash & Press)',
    price: '£3.50',
    parentId: 'Laundry',
    id: 61,
  },
  {
    name: 'Jumpsuit (Wash & Press)',
    price: '£9.95',
    parentId: 'Laundry',
    id: 62,
  },
  {
    name: 'Tracksuit Top (Wash & Press)',
    price: '£6.50 ',
    parentId: 'Laundry',
    id: 63,
  },
  {
    name: 'Tracksuit Bottom (Wash & Press)',
    price: '4.50',
    parentId: 'Laundry',
    id: 64,
  },
  {
    name: 'Service Wash (Wash, Dry & Fold) Below 5kg',
    price: '£3.95 per kg',
    parentId: 'Laundry',
    id: 65,
  },
  {
    name: 'Service Wash (Wash, Dry & Fold) Above 5kg',
    price: '£3.50 per kg ',
    parentId: 'Laundry',
    id: 66,
  },
  {
    name: 'Single Duvet',
    price: '£14.95',
    parentId: 'Bedding',
    id: 67,
  },
  {
    name: 'Single Duvet Feather',
    price: '£17.95',
    parentId: 'Bedding',
    id: 68,
  },
  {
    name: 'Double Duvet',
    price: '£19.95',
    parentId: 'Bedding',
    id: 69,
  },
  {
    name: 'Double Duvet Feather',
    price: '£23.95',
    parentId: 'Bedding',
    id: 70,
  },
  {
    name: 'King Duvet',
    price: '£22.95',
    parentId: 'Bedding',
    id: 71,
  },
  {
    name: 'King Duvet Feather',
    price: '£26.95',
    parentId: 'Bedding',
    id: 72,
  },
  {
    name: 'Super King Duvet',
    price: '£16.45',
    parentId: 'Bedding',
    id: 73,
  },
  {
    name: 'Super King Duvet Feather',
    price: '£28.95',
    parentId: 'Bedding',
    id: 74,
  },
  {
    name: 'Single Bed Set',
    price: '£13.50',
    parentId: 'Bedding',
    id: 75,
  },
  {
    name: 'Double Bed Set',
    price: '£17.50',
    parentId: 'Bedding',
    id: 76,
  },
  {
    name: 'King Bed Set',
    price: '£19.50',
    parentId: 'Bedding',
    id: 77,
  },
  {
    name: 'Super King Bed Set',
    price: '£21.50',
    parentId: 'Bedding',
    id: 78,
  },
  {
    name: 'Duvet Cover - Silk',
    price: '£10.95',
    parentId: 'Bedding',
    id: 79,
  },
  {
    name: 'Duvet Cover - Single',
    price: '£6.50',
    parentId: 'Bedding',
    id: 80,
  },
  {
    name: 'Duvet Cover - Double',
    price: '£8.95',
    parentId: 'Bedding',
    id: 81,
  },
  {
    name: 'Duvet Cover - King',
    price: '£9.95',
    parentId: 'Bedding',
    id: 82,
  },
  {
    name: 'Duvet Cover - Super King',
    price: '£10.95',
    parentId: 'Bedding',
    id: 83,
  },
  {
    name: 'Sheet – Silk',
    price: '£9.50',
    parentId: 'Bedding',
    id: 84,
  },
  {
    name: 'Single Bed Sheet',
    price: '£4.50',
    parentId: 'Bedding',
    id: 85,
  },
  {
    name: 'Double Bed Sheet',
    price: '6.50',
    parentId: 'Bedding',
    id: 86,
  },
  {
    name: 'King Bed Sheet',
    price: '7.50',
    parentId: 'Bedding',
    id: 87,
  },
  {
    name: 'Super King Bed Sheet',
    price: '8.50',
    parentId: 'Bedding',
    id: 88,
  },
  {
    name: 'Pillow Case',
    price: '2.50',
    parentId: 'Bedding',
    id: 89,
  },
  {
    name: 'Pillow Case - Silk',
    price: '3.95',
    parentId: 'Bedding',
    id: 90,
  },
  {
    name: 'Pillow (Small)',
    price: '£9.95',
    parentId: 'Bedding',
    id: 91,
  },
  {
    name: 'Pillow (Large)',
    price: '£11.95',
    parentId: 'Bedding',
    id: 92,
  },
  {
    name: 'Bedspread',
    price: '19.95',
    parentId: 'Bedding',
    id: 93,
  },
  {
    name: 'Single Topper',
    price: '£19.95',
    parentId: 'Bedding',
    id: 94,
  },
  {
    name: 'Single Topper Feather',
    price: '£24.95',
    parentId: 'Bedding',
    id: 95,
  },
  {
    name: 'Double Topper',
    price: ' £24.95',
    parentId: 'Bedding',
    id: 96,
  },
  {
    name: 'Double Topper Feather',
    price: '£29.95',
    parentId: 'Bedding',
    id: 97,
  },
  {
    name: 'King Topper ',
    price: '£34.95',
    parentId: 'Bedding',
    id: 98,
  },
  {
    name: 'King Topper Feather',
    price: '£39.95',
    parentId: 'Bedding',
    id: 99,
  },
  {
    name: 'Super King Topper',
    price: '£36.95',
    parentId: 'Bedding',
    id: 100,
  },
  {
    name: 'Super King Topper Feather',
    price: '£42.95',
    parentId: 'Bedding',
    id: 101,
  },
  {
    name: 'Mattress Cover/ Protector',
    price: '£21.95',
    parentId: 'Bedding',
    id: 102,
  },
  {
    name: 'Mattress Cover/ Protector Feather',
    price: '£31.95',
    parentId: 'Bedding',
    id: 103,
  },
  {
    name: 'Blanket (Single)',
    price: '£12.50',
    parentId: 'Bedding',
    id: 104,
  },
  {
    name: 'Blanket (Double)',
    price: '£17.95',
    parentId: 'Bedding',
    id: 105,
  },
  {
    name: 'Blanket (King)',
    price: '£19.95',
    parentId: 'Bedding',
    id: 106,
  },
  {
    name: 'Blanket (Super King)',
    price: ' £22.50',
    parentId: 'Bedding',
    id: 107,
  },
  {
    name: 'Silk Bed set (Single)',
    price: '£19.95',
    parentId: 'Bedding',
    id: 108,
  },
  {
    name: 'Silk Bed set (Double)',
    price: '£24.95',
    parentId: 'Bedding',
    id: 109,
  },
  {
    name: 'Silk Bed set (King)',
    price: '£26.95',
    parentId: 'Bedding',
    id: 110,
  },
  {
    name: 'Silk Bed set (Super King)',
    price: '£28.95',
    parentId: 'Bedding',
    id: 111,
  },
  {
    name: 'Apron (Wash & Press) ',
    price: '£3.95',
    parentId: 'Household',
    id: 112,
  },
  {
    name: 'Chair Cover ',
    price: '8.95',
    parentId: 'Household',
    id: 113,
  },
  {
    name: 'Chair Cover (Double) ',
    price: '£24.95',
    parentId: 'Household',
    id: 114,
  },
  {
    name: 'Cushion Cover',
    price: '£4.95',
    parentId: 'Household',
    id: 115,
  },
  {
    name: 'Cushion Cover (Large) ',
    price: ' £7.95',
    parentId: 'Household',
    id: 116,
  },
  {
    name: 'Mat',
    price: '£18.95',
    parentId: 'Household',
    id: 117,
  },
  {
    name: 'Napkin',
    price: '£1.00',
    parentId: 'Household',
    id: 118,
  },
  {
    name: 'Rug (Dry Clean/ Wash)',
    price: 'Starting from £70.00',
    parentId: 'Household',
    id: 119,
  },
  {
    name: 'Table Cloth',
    price: '£6.95',
    parentId: 'Household',
    id: 120,
  },
  {
    name: 'Table Runner (Wash & Press)',
    price: '£11.95',
    parentId: 'Household',
    id: 121,
  },
  {
    name: 'Towel ',
    price: '£4.95',
    parentId: 'Household',
    id: 122,
  },
  {
    name: 'Towel (Large)',
    price: '£4.95',
    parentId: 'Household',
    id: 123,
  },
  {
    name: 'Throw',
    price: '£14.95',
    parentId: 'Household',
    id: 124,
  },
  {
    name: 'Curtains (Dry Clean)',
    price: '£10.00 per kg',
    parentId: 'Household',
    id: 125,
  },
  {
    name: 'Service Wash (Wash, Dry & Fold) Below 5kg',
    price: '£3.95',
    parentId: 'Household',
    id: 126,
  },
  {
    name: 'Service Wash (Wash, Dry & Fold) Above 5kg ',
    price: '£3.50 ',
    parentId: 'Household',
    id: 127,
  },
  {
    name: 'Two-Piece Suit',
    price: '£9.95',
    parentId: 'Ironing Only',
    id: 128,
  },
  {
    name: 'Three Piece Suit',
    price: ' £12.50',
    parentId: 'Ironing Only',
    id: 129,
  },
  {
    name: 'Dinner Suit/ Tuxedo',
    price: '£11.50',
    parentId: 'Ironing Only',
    id: 130,
  },
  {
    name: 'Dinner Jacket',
    price: '£7.50',
    parentId: 'Ironing Only',
    id: 131,
  },
  {
    name: 'Dinner Trouser',
    price: '£4.95',
    parentId: 'Ironing Only',
    id: 132,
  },
  {
    name: 'Dress Suit',
    price: '£13.50',
    parentId: 'Ironing Only',
    id: 133,
  },
  {
    name: 'Dress',
    price: 'From £8.95',
    parentId: 'Ironing Only',
    id: 134,
  },
  {
    name: 'Skirt',
    price: 'From £4.95',
    parentId: 'Ironing Only',
    id: 135,
  },
  {
    name: 'Trouser',
    price: '£3.96',
    parentId: 'Ironing Only',
    id: 136,
  },
  {
    name: 'Jeans',
    price: '£3.95',
    parentId: 'Ironing Only',
    id: 137,
  },
  {
    name: 'Shorts',
    price: '£3.95',
    parentId: 'Ironing Only',
    id: 138,
  },
  {
    name: 'Men’s Shirt',
    price: '£1.95',
    parentId: 'Ironing Only',
    id: 139,
  },
  {
    name: 'Ladies Shirt',
    price: '£2.95',
    parentId: 'Ironing Only',
    id: 140,
  },
  {
    name: 'Jacket/ Blazer',
    price: '£6.50',
    parentId: 'Ironing Only',
    id: 141,
  },
  {
    name: 'Jacket (Silk)',
    price: '£6.95',
    parentId: 'Ironing Only',
    id: 142,
  },
  {
    name: 'Light Knitwear',
    price: '£4.50',
    parentId: 'Ironing Only',
    id: 143,
  },
  {
    name: 'Heavy Knitwear',
    price: '£5.50',
    parentId: 'Ironing Only',
    id: 144,
  },
  {
    name: 'Tie',
    price: '£2.95',
    parentId: 'Ironing Only',
    id: 145,
  },
  {
    name: 'Scarf',
    price: '£4.95',
    parentId: 'Ironing Only',
    id: 146,
  },
  {
    name: 'Top',
    price: '£5.50',
    parentId: 'Ironing Only',
    id: 147,
  },
  {
    name: 'Shawl',
    price: '£6.95',
    parentId: 'Ironing Only',
    id: 148,
  },
  {
    name: 'Blouse',
    price: '£5.50',
    parentId: 'Ironing Only',
    id: 149,
  },
  {
    name: 'Coat',
    price: 'From £8.95',
    parentId: 'Ironing Only',
    id: 150,
  },
  {
    name: 'Waistcoat',
    price: '£3.95',
    parentId: 'Ironing Only',
    id: 151,
  },
  {
    name: 'Rain Coat / Mac',
    price: 'From £10.50',
    parentId: 'Ironing Only',
    id: 152,
  },
  {
    name: 'Polo T-shirt',
    price: '£3.50',
    parentId: 'Ironing Only',
    id: 153,
  },
  {
    name: 'T-shirt',
    price: '£2.95',
    parentId: 'Ironing Only',
    id: 154,
  },
  {
    name: 'Jumpsuit ',
    price: '£8.50',
    parentId: 'Ironing Only',
    id: 155,
  },
  {
    name: 'Tracksuit',
    price: '£8.95',
    parentId: 'Ironing Only',
    id: 156,
  },
  {
    name: 'Tracksuit Top',
    price: '£4.95',
    parentId: 'Ironing Only',
    id: 157,
  },
  {
    name: 'Tracksuit Bottom',
    price: '£3.95',
    parentId: 'Ironing Only',
    id: 158,
  },
  {
    name: 'Curtains (Dry Clean)',
    price: '£10.00 per kg',
    parentId: 'Curtains',
    id: 159,
  },
  {
    name: 'Curtains  - Shortening',
    price: 'Starting from £30.00',
    parentId: 'Curtains',
    id: 160,
  },
  {
    name: 'Curtains – Re-hem',
    price: 'Starting from £20.00',
    parentId: 'Curtains',
    id: 161,
  },
  {
    name: 'Single Bed Set',
    price: '£10.95',
    parentId: 'Household Iron',
    id: 162,
  },
  {
    name: 'Double Bed Set',
    price: '£13.95',
    parentId: 'Household Iron',
    id: 163,
  },
  {
    name: 'King Bed Set',
    price: '£14.45',
    parentId: 'Household Iron',
    id: 164,
  },
  {
    name: 'Super King Bed Set',
    price: '£15.45',
    parentId: 'Household Iron',
    id: 165,
  },
  {
    name: 'Duvet Cover - Single',
    price: '£4.95',
    parentId: 'Household Iron',
    id: 167,
  },
  {
    name: 'Duvet Cover - Double',
    price: '£7.95',
    parentId: 'Household Iron',
    id: 168,
  },
  {
    name: 'Duvet Cover - King',
    price: '£8.95',
    parentId: 'Household Iron',
    id: 169,
  },
  {
    name: 'Duvet Cover - Super King',
    price: '£9.95',
    parentId: 'Household Iron',
    id: 170,
  },
  {
    name: 'Bed Sheet - Single',
    price: '£3.50',
    parentId: 'Household Iron',
    id: 171,
  },
  {
    name: 'Bed Sheet - Double',
    price: '£4.50',
    parentId: 'Household Iron',
    id: 172,
  },
  {
    name: 'Bed Sheet - King',
    price: '£5.50',
    parentId: 'Household Iron',
    id: 173,
  },
  {
    name: 'Bed Sheet - Super King',
    price: '£6.50',
    parentId: 'Household Iron',
    id: 174,
  },
  {
    name: 'Cushion Cover',
    price: '£3.50',
    parentId: 'Household Iron',
    id: 175,
  },
  {
    name: 'Pillow Case (Silk)',
    price: '£1.95',
    parentId: 'Household Iron',
    id: 176,
  },
  {
    name: 'Pillow Case',
    price: '£1.50',
    parentId: 'Household Iron',
    id: 177,
  },
  {
    name: 'Table Cloth',
    price: '£3.50',
    parentId: 'Household Iron',
    id: 178,
  },
  {
    name: 'Leather Jacket (Cleaning)',
    price: '£55.00',
    parentId: 'Fur/Leather/Suede',
    id: 179,
  },
  {
    name: 'Suede Jacket (Cleaning)',
    price: '£60.00',
    parentId: 'Fur/Leather/Suede',
    id: 180,
  },
  {
    name: 'Fur Jacket (Cleaning)',
    price: '£60.00',
    parentId: 'Fur/Leather/Suede',
    id: 181,
  },
  {
    name: 'Leather Coat (Cleaning)',
    price: '£70.00',
    parentId: 'Fur/Leather/Suede',
    id: 182,
  },
  {
    name: 'Suede Coat (Cleaning)',
    price: '£75.00',
    parentId: 'Fur/Leather/Suede',
    id: 183,
  },
  {
    name: 'Fur Coat (Cleaning)',
    price: '£75.00',
    parentId: 'Fur/Leather/Suede',
    id: 184,
  },
  {
    name: 'Leather Gloves (Cleaning)',
    price: '£22.50',
    parentId: 'Fur/Leather/Suede',
    id: 185,
  },
  {
    name: 'Suede Gloves (Cleaning)',
    price: '£25.00',
    parentId: 'Fur/Leather/Suede',
    id: 186,
  },
  {
    name: 'Fur Gloves(Cleaning)',
    price: '£25.00',
    parentId: 'Fur/Leather/Suede',
    id: 187,
  },
  {
    name: 'Leather Skirt (Cleaning)',
    price: '£35.00',
    parentId: 'Fur/Leather/Suede',
    id: 188,
  },
  {
    name: 'Leather Trousers (Cleaning)',
    price: '£35.00',
    parentId: 'Fur/Leather/Suede',
    id: 189,
  },
  {
    name: 'Leather Trouser (Shortening)',
    price: '£22.00',
    parentId: 'Fur/Leather/Suede',
    id: 190,
  },
  {
    name: 'Leather Jacket (Shorten Sleeve)',
    price: '£35.00',
    parentId: 'Fur/Leather/Suede',
    id: 191,
  },
  {
    name: 'Leather Jacket (Shorten Sleeve from Shoulder)',
    price: '£55.00',
    parentId: 'Fur/Leather/Suede',
    id: 192,
  },
  {
    name: 'Burberry Coat ',
    price: '£40.00',
    parentId: 'Specialist',
    id: 193,
  },
  {
    name: 'Canada Goose Coat',
    price: '£45.00',
    parentId: 'Specialist',
    id: 194,
  },
  {
    name: 'Moncler Coat',
    price: '£45.00',
    parentId: 'Specialist',
    id: 195,
  },
  {
    name: 'UGG Boots',
    price: '£30.00',
    parentId: 'Specialist',
    id: 196,
  },
  {
    name: 'Jean Shortening ',
    price: '£13.00 ',
    parentId: 'Alteration',
    id: 197,
  },
  {
    name: 'Jean Original Finish ',
    price: '£15.00',
    parentId: 'Alteration',
    id: 198,
  },
  {
    name: 'Jean Taper',
    price: '£15.00',
    parentId: 'Alteration',
    id: 199,
  },
  {
    name: 'Trouser Take In/ Let Out ',
    price: '£15.00 ',
    parentId: 'Alteration',
    id: 200,
  },
  {
    name: 'Jeans Take In/ Let Out ',
    price: '£16.00',
    parentId: 'Alteration',
    id: 201,
  },
  {
    name: 'Trouser Zip ',
    price: '£14.00',
    parentId: 'Alteration',
    id: 202,
  },
];

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

const PriceListHero = () => {
  const [category, setCategory] = useState(0);

  useEffect(() => {
    Data.filter((cat) => {
      if (cat?.id == category) {
        return cat;
      } else {
        return null;
      }
    });
  }, [category]);

  return (
    <>
      <Stack
        direction={{ base: 'column', sm: 'row' }}
        justifyContent='space-between'
        maxW='9xl'
        mx='auto'
        bg='spinwash.300'
      >
        <VStack
          zIndex={'1'}
          color='white'
          p={{
            base: '4rem 1rem 1rem 1rem',
            sm: '4rem 1rem 6rem 1rem',
            md: '4rem 0rem 4rem 4rem',
            lg: '8rem 2rem 4rem 2rem',
          }}
          spacing={{ base: '1rem', md: '1.5rem', xl: '2rem' }}
          ml={{ base: '0', sm: 'auto', xl: '8rem' }}
          mr={{ base: '0', sm: 'auto', xl: '-20rem' }}
          maxW={{ base: 'full', sm: '80vw', xl: '44vw' }}
        >
          <MotionBox
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: 'easeInOut' },
            }}
          >
            <Heading fontSize={{ base: '4xl', xl: '7xl' }}>
              Price List For Our Services
            </Heading>
          </MotionBox>
          <MotionBox
            as='flex'
            alignSelf='start'
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, delay: 0.4, ease: 'easeInOut' },
            }}
          >
            <Box
              w={['70vw', '50vw', '30vw']}
              bg='white'
              mt={'1rem'}
              maxH={{ base: '1rem', md: '4.08rem' }}
            >
              <SearchBar
                setItem={setCategory}
                dark={false}
                Data={SearchData}
                placeholder='Search for Item'
              />
            </Box>
          </MotionBox>
        </VStack>
        <MotionBox
          display={{ base: 'flex', sm: 'none', md: 'flex' }}
          justifyContent='end'
          alignItems='end'
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1, delay: 1.6, ease: 'easeInOut' },
          }}
        >
          <Image
            zIndex={'0'}
            src={HeroImage}
            pt='2rem'
            w='clamp(24rem, 28vw,45rem)'
            align={'flex-end'}
            mt='auto'
          />
        </MotionBox>
      </Stack>
      <Wrap
        maxW='9xl'
        p={['2rem 0.5rem', '2rem', '3rem', '4rem']}
        spacing={{ base: '3vw', sm: '0.5rem', md: '1rem' }}
        align={'center'}
        justify='center'
      >
        {Data.map((item) => (
          <MotionBox
            key={item.key}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.6,
                delay: 1.5,
                ease: 'easeInOut',
              },
            }}
            as='button'
            onClick={() => {
              setCategory(item.id);
            }}
            display='flex'
            alignItems='center'
            justifyContent='center'
            w={['7.1rem', '10rem', '12rem', '16rem']}
            h='full'
            minH='3.5rem'
            p={['0.4rem 0.8rem', '0.8rem 1.6rem', '1rem 2rem', '1.2rem 2.4rem']}
            bg='spinwash.100'
            _hover={{
              bg: 'spinwash.500',
              color: 'white',
              transition: 'all 0.5s',
            }}
            _focus={{
              bg: 'spinwash.500',
              color: 'white',
              transition: 'all 0.5s',
            }}
          >
            <Heading
              fontWeight={{ base: '300', md: '400' }}
              fontSize={['sx', 'sm', 'md', 'xl']}
            >
              {item.title}
            </Heading>
          </MotionBox>
        ))}
      </Wrap>
      <MotionVStack
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay: 1, ease: 'easeInOut' },
        }}
        mx='auto'
        alignItems={'start'}
        maxW='80vw'
        spacing={'2rem'}
        py='2rem'
      >
        <Heading fontSize={{ base: '2xl', md: '3xl' }}>
          {Data[category].title}
        </Heading>
        <Wrap justify={'space-between'} spacing='1rem'>
          {Data[category].items.map((item) => (
            <HStack
              fontSize={{ base: 'xm', md: 'xl' }}
              minW={{ base: '12rem', lg: '26rem' }}
              w={{ base: '100%', lg: '30vw' }}
              justifyContent={'space-between'}
              alignItems='center'
            >
              <Text>{item.name}</Text>
              <Text fontWeight={'500'} textAlign='end'>
                {item.price}
              </Text>
            </HStack>
          ))}
        </Wrap>
        {Data[category].note && (
          <Stack
            alignSelf='center'
            py={{ base: '2rem', md: '4rem' }}
            w='full'
            mx='auto'
          >
            <Text
              w='full'
              p={{ base: '1rem 2rem', md: '2rem 3rem' }}
              textAlign={'center'}
              bg='spinwash.100'
              fontWeight={'500'}
              fontSize={{ base: 'md', md: 'xl' }}
            >
              {Data[category].note}
            </Text>
          </Stack>
        )}
      </MotionVStack>
    </>
  );
};

export default PriceListHero;
