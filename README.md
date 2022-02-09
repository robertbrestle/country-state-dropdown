# Country-State Dropdown - Pure JavaScript Edition


## Example usage:

```
populateCountry('countryElementId');
populateState('countryElementId', 'stateElementId');
```

update state dropdown via click handler:

```
document.getElementById('countryElementId')
		.addEventListener("click", function () {
			populateState('countryElementId', 'stateElementId');
		});
```

See example.html for a working example.
&nbsp;
