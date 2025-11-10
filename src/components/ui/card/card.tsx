import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import "@/index.css"

// Import Heroicons (React)
import { AcademicCapIcon, CheckBadgeIcon, UserGroupIcon } from '@heroicons/react/24/solid'

type SingleCardProps = {
    title: string
    description: string
    Icon: React.ElementType
}

function SingleCard({ title, description, Icon }: SingleCardProps) {
    // Breakpoints
    const isMobile = useMediaQuery('(max-width:768px)')
    const isMedium = useMediaQuery('(min-width:769px) and (max-width:1679px)')
    const isLarge = useMediaQuery('(min-width:1680px)')

    // Default (Large)
    let styles = {
        width: '550px',
        height: '230px',
        padding: 2,
        gap: 2,
        marginRight: '32px',
        iconSize: 80,
        fontTitle: '32px',
        fontDesc: '22px',
    }

    if (isMobile) {
        styles = {
            width: '320px',
            height: '180px',
            padding: 1.5,
            gap: 1.5,
            marginRight: '12px',
            iconSize: 50,
            fontTitle: '20px',
            fontDesc: '16px',
        }
    } else if (isMedium) {
        styles = {
            width: '400px',
            height: '200px',
            padding: 1.5,
            gap: 1,
            marginRight: '12px',
            iconSize: 40,
            fontTitle: '20px',
            fontDesc: '15px',
        }
    } else if (isLarge) {
        styles = {
            width: '600px',
            height: '250px',
            padding: 2.5,
            gap: 2.5,
            marginRight: '36px',
            iconSize: 90,
            fontTitle: '36px',
            fontDesc: '24px',
        }
    }

    return (
        <Card
            elevation={0}
            sx={{
                width: styles.width,
                height: styles.height,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: styles.padding,
                borderRadius: '20px',
                boxShadow: '0px 3px 10px rgba(82, 82, 82, 0.1)',
                gap: styles.gap,
                backgroundColor: "#ffffff",
            }}
        >
            {/* Icon */}
            <Box sx={{
                flexShrink: 0, 
                marginRight: styles.marginRight, 
                display: 'flex',          
                alignItems: 'center',     
                justifyContent: 'center', 
                height: '100%',
            }}>
                <Icon style={{ width: styles.iconSize, height: styles.iconSize, color: "#4BD270" }} />
            </Box>

            {/* Text */}
            <CardContent sx={{ padding: 0 }}>
                <Typography
                    component="div"
                    sx={{
                        color: "#4BD270",
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: styles.fontTitle,
                        fontWeight: 600,
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    sx={{
                        color: "#666666",
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: styles.fontDesc,
                        fontWeight: 400,
                        mt: 1,
                    }}
                >
                    {description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export function ThreeCards() {
    const cardsData = [
        { title: "Edukasi", description: "Belajar interaktif berbasis praktik, siap menghadapi dunia kerja.", Icon: AcademicCapIcon },
        { title: "Sertifikasi", description: "Bukti resmi kompetensi diri, meningkatkan kepercayaan dan peluang karier.", Icon: CheckBadgeIcon },
        { title: "Profesi", description: "Wujudkan karier terarah dengan keterampilan vokasi yang relevan.", Icon: UserGroupIcon },
    ]

    return (
        <div className="flex flex-col min-[769px]:flex-row gap-[40px] justify-center items-center px-[40px]">
            {cardsData.map((card, index) => (
                <SingleCard
                    key={index}
                    title={card.title}
                    description={card.description}
                    Icon={card.Icon}
                />
            ))}
        </div>
    )
}