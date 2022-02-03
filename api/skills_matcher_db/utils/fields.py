from django.contrib.postgres.fields import ArrayField
from django import forms


class ChoiceArrayField(ArrayField):
    """
    A field that allows us to store an array of choices.
    Uses Django's Postgres ArrayField
    and a CheckboxSelectMultiple for its formfield.
    """

    def formfield(self, **kwargs):
        defaults = {
            "form_class": forms.TypedMultipleChoiceField,
            "choices": self.base_field.choices,
            "coerce": self.base_field.to_python,
            "widget": forms.CheckboxSelectMultiple,
        }
        defaults.update(kwargs)

        return super(ArrayField, self).formfield(**defaults)
