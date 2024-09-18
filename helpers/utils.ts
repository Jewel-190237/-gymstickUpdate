
export const statusClass = {
    'Under Approval': 'status-warning',
    'Approved': 'status-info',
    'Published': 'status-success',
    'Unpublished': 'status-secondary',
    'Rejected': 'status-danger',
    'suspended': 'status-danger',
    'pending': 'status-warning',
    'approved': 'status-info',
    'rejected': 'status-danger',
    'processing': 'status-info',
    'active': 'status-info',
    'completed': 'status-success',
    'complete': 'status-success',
    'cancelled': 'status-danger',
    'failed': 'status-danger',
    'refunded': 'status-danger',
    'on-hold': 'status-warning',
    'trash': 'status-info',
    'accepted': 'status-info',
    'started': 'status-success',
    'driver_pending': 'status-danger',
    'user_pending': 'status-danger',
    'ride': 'status-danger',
    'add_money': 'status-success',
    'break': 'status-warning',
    'paid': 'status-info',
    'expired': 'status-danger',
}

export const categories = [
    {
        title: "House",
        icon: "user-rounded",
        value: 'house',
    },
    {
        title: "Apartment",
        icon: "user-group",
        value: 'apartment'
    },
    {
        title: "Barn",
        icon: "broken-building",
        value: 'barn'
    },
    {
        title: "Bed & Breakfast",
        icon: "broken-industry",
        'value': 'bed_breakfast'
    },
    {
        title: "Boat",
        icon: "broken-bank",
        value: 'boat'
    },
    {
        title: "Cabin",
        icon: "broken-bank",
        value: 'cabin'
    },
    {
        title: "Camper",
        icon: "broken-bank",
        value: 'camper'
    }, {
        title: "Casa Particular",
        icon: "broken-bank",
        value: 'casa_particular'
    }
]

export const host_types = [
    {
        title: "An Enter Place",
        description: "Guest have the whole place to themselves",
        icon: "user-rounded",
        value: 'entire_place'
    },
    {
        title: "A Room",
        description: "Guests have their own room in a home, plus access to shared spaces.",
        icon: "user-group",
        value: 'private_room'
    },
    {
        title: "A Shared Room",
        description: "Guests sleep in a room or common area that may be shared with you or others.",
        icon: "broken-building",
        value: 'shared_room'
    },
]

export const places = [
    {
        title: "Next destination",
        icon: "education",
        value: 'next_destination'
    },
    {
        title: "Next destination",
        icon: "education",
        value: 'next_destination1'
    },
    {
        title: "Next destination",
        icon: "education",
        value: 'next_destination2'
    },
    {
        title: "Next destination",
        icon: "education",
        value: 'next_destination3'
    },
]

export const interest = [
    {
        label: "Next",
        icon: "education",
        value: 'next'
    },
    {
        label: "Yoga",
        icon: "education",
        value: 'Yoga'
    },
    {
        label: "History",
        icon: "education",
        value: 'history'
    },
    {
        label: "Shopping",
        icon: "education",
        value: 'shopping'
    },
    {
        label: "Photography",
        icon: "education",
        value: 'photography'
    },
    {
        label: "Edu",
        icon: "education",
        value: 'edu'
    },
    {
        label: "Song",
        icon: "education",
        value: 'song'
    },
]

export const getTimeFormat = seconds => {
    return seconds > 0 ? `${(seconds / 3600).toFixed(0)}:${((seconds / 60 >> 0) % 60).toString().padStart(2, '0')}` : ''
}

export const toAssetUrl = (url) => {
    return url ? `${process.env.backend_url}assets/${url}` : ''
}
