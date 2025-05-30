export const radioGroups = [
  {
    name: 'gender',
    label: 'Giới tính',
    options: [
      { label: 'Đực', value: 'male' },
      { label: 'Cái', value: 'female' }
    ]
  },
  {
    name: 'neutered',
    label: 'Đã triệt sản/thiến chưa?',
    options: [
      { label: 'Rồi', value: 'yes' },
      { label: 'Chưa', value: 'no' }
    ]
  },
  {
    name: 'living',
    label: 'Môi trường sống',
    options: [
      { label: 'Căn hộ', value: 'apartment' },
      { label: 'Nhà có sân vườn', value: 'house' },
      { label: 'Khác', value: 'other' }
    ]
  }
]
export const behaviorRadioGroups = [
  {
    name: 'behavior',
    label: 'Loại hành vi',
    options: [
      { label: 'Hung hăng', value: 'aggression' },
      { label: 'Lo âu/sợ hãi', value: 'anxiety' },
      { label: 'Sủa quá mức', value: 'barking' },
      { label: 'Cắn/gặm đồ', value: 'chewing' },
      { label: 'Vấn đề vệ sinh', value: 'house-training' },
      { label: 'Khác', value: 'other' }
    ]
  },
  {
    name: 'duration',
    label: 'Hành vi này đã xảy ra trong bao lâu?',
    options: [
      { label: 'Mới đây (dưới 1 tháng)', value: 'recent' },
      { label: 'Vài tháng', value: 'months' },
      { label: 'Lâu dài (trên 6 tháng)', value: 'long-term' }
    ]
  }
]
