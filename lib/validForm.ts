interface ValidFormProps {
  props: Object
  compare: '||' | '&&'
}

export default function validForm({ props, compare }: ValidFormProps) {
  switch (compare) {
    case '&&':
      return props && Object.values(props).every(item => item !== '')
    case '||':
      return props && Object.values(props).some(item => item !== '')
  }
}
