export class FormHandler {
    constructor(documentElement, settings) {
        this.element = documentElement
        this.settings = settings
    }

    onSubmit = fn => {
        this.element.addEventListener('submit', e => {
            this.settings.preventDefault ? e.preventDefault() : null
            const values = []
            const valueTargets = e.target.querySelectorAll('input, textarea, radio, checklist')
            valueTargets.forEach(target => {
                values.push({
                    name: target.name,
                    value: target.value
                })
            })

            fn.call(this, values)
        })
    }
}

export default FormHandler