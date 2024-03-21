import { NextResponse } from 'next/server';
import storeisModal from '../../../models/storeisModal';
import connectDB from '@/lib/dbConnection';


export const GET = async () => {
    try {
        await connectDB()
        const entries = [
            {
                imageUrl: '/images/cropped-Australian-musician-author-Nick.webp',
                title: 'Nick Cave & the Bad Seeds: Sportpaleis October',
                type: "Entertainment",
                stories: [
                    {
                        image: "/images/cropped-Lenovo-Legion-9i-16-inch-2023.webp",
                        text: "Story 1 text"
                    },
                    {
                        image: "/images/cropped-gsmarena_000.jpg",
                        text: "Story 2 text"
                    },
                    {
                        image: "/images/cropped-o1smmmac7vob1-scaled-1.webp",
                        text: "Story 3 text"
                    }
                ]
            },
            {
                imageUrl: '/images/cropped-1200px-Charlize-theron-IMG_6045.webp',
                title: 'Charlize Theron at 4Gamechangers Festival',
                type: "Entertainment",
                stories: [
                    {
                        image: "/images/cropped-Lenovo-Legion-9i-16-inch-2023.webp",
                        text: "Story 1 text"
                    },
                    {
                        image: "/images/cropped-gsmarena_000.jpg",
                        text: "Story 2 text"
                    },
                    {
                        image: "/images/cropped-o1smmmac7vob1-scaled-1.webp",
                        text: "Story 3 text"
                    }
                ]
            },
            {
                imageUrl: '/images/cropped-wp10258595.webp',
                title: 'Bich Phuong Back After Struggles With Independent Work',
                type: "Entertainment",
                stories: [
                    {
                        image: "/images/cropped-Lenovo-Legion-9i-16-inch-2023.webp",
                        text: "Story 1 text"
                    },
                    {
                        image: "/images/cropped-gsmarena_000.jpg",
                        text: "Story 2 text"
                    },
                    {
                        image: "/images/cropped-o1smmmac7vob1-scaled-1.webp",
                        text: "Story 3 text"
                    }
                ]
            },
            {
                imageUrl: '/images/cropped-11337213.webp',
                title: 'Ink Harmony: María Becerra\'s Song Unveil',
                type: "Entertainment",
                stories: [
                    {
                        image: "/images/cropped-Lenovo-Legion-9i-16-inch-2023.webp",
                        text: "Story 1 text"
                    },
                    {
                        image: "/images/cropped-gsmarena_000.jpg",
                        text: "Story 2 text"
                    },
                    {
                        image: "/images/cropped-o1smmmac7vob1-scaled-1.webp",
                        text: "Story 3 text"
                    }
                ]
            },
            {
                imageUrl: '/images/cropped-celine-dion-0db9603fd795429b93f8.webp',
                title: 'Celine Dion’s Essential Love on Vinyl',
                type: "Entertainment",
                stories: [
                    {
                        image: "/images/cropped-Lenovo-Legion-9i-16-inch-2023.webp",
                        text: "Story 1 text"
                    },
                    {
                        image: "/images/cropped-gsmarena_000.jpg",
                        text: "Story 2 text"
                    },
                    {
                        image: "/images/cropped-o1smmmac7vob1-scaled-1.webp",
                        text: "Story 3 text"
                    }
                ]
            },
            {
                imageUrl: '/images/cropped-s31gvehdrmidnight_Babysitter_sti.webp',
                title: "Sylvain's Triumph: César Glory for Best Foreign Film",
                type: "Entertainment",
                stories: [
                    {
                        image: "/images/cropped-Lenovo-Legion-9i-16-inch-2023.webp",
                        text: "Story 1 text"
                    },
                    {
                        image: "/images/cropped-gsmarena_000.jpg",
                        text: "Story 2 text"
                    },
                    {
                        image: "/images/cropped-o1smmmac7vob1-scaled-1.webp",
                        text: "Story 3 text"
                    }
                ]
            },
            {
                imageUrl: '/images/cropped-Z8nMpF6LBCpgJTbC9NPf3.webp',
                title: "Elden Ring: Shadows of the Erdtree – First Trailer Unveiled",
                type: "Entertainment",
                stories: [
                    {
                        image: "/images/cropped-Lenovo-Legion-9i-16-inch-2023.webp",
                        text: "Story 1 text"
                    },
                    {
                        image: "/images/cropped-gsmarena_000.jpg",
                        text: "Story 2 text"
                    },
                    {
                        image: "/images/cropped-o1smmmac7vob1-scaled-1.webp",
                        text: "Story 3 text"
                    }
                ]
            },
            {
                imageUrl: '/images/cropped-borderlands-052821-silhouette-91-scaled-1.webp',
                title: "First 'Borderlands' Movie Stills Spark Mixed Emotions",
                type: "Entertainment",
                stories: [
                    {
                        image: "/images/cropped-Lenovo-Legion-9i-16-inch-2023.webp",
                        text: "Story 1 text"
                    },
                    {
                        image: "/images/cropped-gsmarena_000.jpg",
                        text: "Story 2 text"
                    },
                    {
                        image: "/images/cropped-o1smmmac7vob1-scaled-1.webp",
                        text: "Story 3 text"
                    }
                ]
            },
            {
                imageUrl: '/images/cropped-zendaya_dune_1708074009164_17080.webp',
                title: "Star-Studded Dune, Part Two Premiere",
                type: "Entertainment",
                stories: [
                    {
                        image: "/images/cropped-Lenovo-Legion-9i-16-inch-2023.webp",
                        text: "Story 1 text"
                    },
                    {
                        image: "/images/cropped-gsmarena_000.jpg",
                        text: "Story 2 text"
                    },
                    {
                        image: "/images/cropped-o1smmmac7vob1-scaled-1.webp",
                        text: "Story 3 text"
                    }
                ]
            },
            {
                imageUrl: '/images/cropped-0CQFeO97Ugh4g0-Yk.jpg',
                title: "Best 5 Anime Opening Themes of All Time",
                type: "Entertainment",
                stories: [
                    {
                        image: "/images/cropped-Lenovo-Legion-9i-16-inch-2023.webp",
                        text: "Story 1 text"
                    },
                    {
                        image: "/images/cropped-gsmarena_000.jpg",
                        text: "Story 2 text"
                    },
                    {
                        image: "/images/cropped-o1smmmac7vob1-scaled-1.webp",
                        text: "Story 3 text"
                    }
                ]
            },

            {
                imageUrl: '/images/cropped-cropped-shot-of-pleased-young-eu.webp',
                title: "6 Ayurvedic Face Packs To Get Glowing Skin",
                type: "Beauty",
                stories: [
                    {
                        image: "/images/cropped-Lenovo-Legion-9i-16-inch-2023.webp",
                        text: "Story 1 text"
                    },
                    {
                        image: "/images/cropped-gsmarena_000.jpg",
                        text: "Story 2 text"
                    },
                    {
                        image: "/images/cropped-o1smmmac7vob1-scaled-1.webp",
                        text: "Story 3 text"
                    }
                ]
            },
            {
                imageUrl: '/images/cropped-beautiful-womans-rash-checked-by.webp',
                title: "Signs on skin that may be indicative of serious diseases",
                type: "Beauty",
                stories: [
                    {
                        image: "/images/cropped-Lenovo-Legion-9i-16-inch-2023.webp",
                        text: "Story 1 text"
                    },
                    {
                        image: "/images/cropped-gsmarena_000.jpg",
                        text: "Story 2 text"
                    },
                    {
                        image: "/images/cropped-o1smmmac7vob1-scaled-1.webp",
                        text: "Story 3 text"
                    }
                ]
            },
            {
                imageUrl: '/images/cropped-Kanji-Recipe-2-3.webp',
                title: "Kanji: A miracle drink with ample beauty benefits",
                type: "Beauty",
                stories: [
                    {
                        image: "/images/cropped-Lenovo-Legion-9i-16-inch-2023.webp",
                        text: "Story 1 text"
                    },
                    {
                        image: "/images/cropped-gsmarena_000.jpg",
                        text: "Story 2 text"
                    },
                    {
                        image: "/images/cropped-o1smmmac7vob1-scaled-1.webp",
                        text: "Story 3 text"
                    }
                ]
            },
            {
                imageUrl: '/images/cropped-bakuchiol-overview-guide-1440x81-1.webp',
                title: "Bakuchiol: The All-In-One Skincare Marvel",
                type: "Beauty",
                stories: [
                    {
                        image: "/images/cropped-Lenovo-Legion-9i-16-inch-2023.webp",
                        text: "Story 1 text"
                    },
                    {
                        image: "/images/cropped-gsmarena_000.jpg",
                        text: "Story 2 text"
                    },
                    {
                        image: "/images/cropped-o1smmmac7vob1-scaled-1.webp",
                        text: "Story 3 text"
                    }
                ]
            },
            {
                imageUrl: '/images/cropped-winter-skincare.webp',
                title: "Winter Skin Care Tips That You Should Follow",
                type: "Beauty",
                stories: [
                    {
                        image: "/images/cropped-Lenovo-Legion-9i-16-inch-2023.webp",
                        text: "Story 1 text"
                    },
                    {
                        image: "/images/cropped-gsmarena_000.jpg",
                        text: "Story 2 text"
                    },
                    {
                        image: "/images/cropped-o1smmmac7vob1-scaled-1.webp",
                        text: "Story 3 text"
                    }
                ]
            },
            {
                imageUrl: '/images/cropped-7ae8ef9c96fa321653cdd24414f2bff5.webp',
                title: "Liu Yifei’s stunning new look revealed!",
                type: "Beauty",
                stories: [
                    {
                        image: "/images/cropped-Lenovo-Legion-9i-16-inch-2023.webp",
                        text: "Story 1 text"
                    },
                    {
                        image: "/images/cropped-gsmarena_000.jpg",
                        text: "Story 2 text"
                    },
                    {
                        image: "/images/cropped-o1smmmac7vob1-scaled-1.webp",
                        text: "Story 3 text"
                    }
                ]
            },
            {
                imageUrl: 'https://play09.funzapy.com/stories/wp-content/uploads/2024/03/cropped-Flat_white_coffee_with_pretty_fe.webp',
                title: "Flat White: Google Doodle Honors Popular Coffee Drink on March 11",
                type: "Food",
                stories: [
                    {
                        image: "/images/cropped-Lenovo-Legion-9i-16-inch-2023.webp",
                        text: "Story 1 text"
                    },
                    {
                        image: "/images/cropped-gsmarena_000.jpg",
                        text: "Story 2 text"
                    },
                    {
                        image: "/images/cropped-o1smmmac7vob1-scaled-1.webp",
                        text: "Story 3 text"
                    }
                ]
            },
            {
                imageUrl: 'https://play.funzapy.com/stories/wp-content/uploads/2024/03/cropped-AN141-Nuts-In-Wooden-Bowl-732x54-1.webp',
                title: "5 worst foods for people with thyroid disorders",
                type: "Food",
                stories: [
                    {
                        image: "/images/cropped-Lenovo-Legion-9i-16-inch-2023.webp",
                        text: "Story 1 text"
                    },
                    {
                        image: "/images/cropped-gsmarena_000.jpg",
                        text: "Story 2 text"
                    },
                    {
                        image: "/images/cropped-o1smmmac7vob1-scaled-1.webp",
                        text: "Story 3 text"
                    }
                ]
            },
            {
                imageUrl: 'https://play09.funzapy.com/stories/wp-content/uploads/2024/02/cropped-pistachio-muffins-RECIPE-CARD.webp',
                title: "Nutty Delight: Pistachio Muffins Recipe",
                type: "Food",
                stories: [
                    {
                        image: "/images/cropped-Lenovo-Legion-9i-16-inch-2023.webp",
                        text: "Story 1 text"
                    },
                    {
                        image: "/images/cropped-gsmarena_000.jpg",
                        text: "Story 2 text"
                    },
                    {
                        image: "/images/cropped-o1smmmac7vob1-scaled-1.webp",
                        text: "Story 3 text"
                    }
                ]
            },
            {
                imageUrl: 'https://play.funzapy.com/stories/wp-content/uploads/2024/02/cropped-cc_1708069857592_1708071507975.webp',
                title: "7 Reasons to Love Green Garlic Crusted Fish Snack",
                type: "Food",
                stories: [
                    {
                        image: "/images/cropped-Lenovo-Legion-9i-16-inch-2023.webp",
                        text: "Story 1 text"
                    },
                    {
                        image: "/images/cropped-gsmarena_000.jpg",
                        text: "Story 2 text"
                    },
                    {
                        image: "/images/cropped-o1smmmac7vob1-scaled-1.webp",
                        text: "Story 3 text"
                    }
                ]
            },
        ];

        await Promise.all(entries.map(async (entryData: any) => {
            const newEntry = await storeisModal.create(entryData)
            await newEntry.save();
        }));
        return NextResponse.json({ message: "Sucess" }, { status: 200 })
    } catch (error) {
        console.error('Error adding sports entries:', error);
        return NextResponse.json({ message: error }, { status: 500 })
    }
};



