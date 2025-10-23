(
    'dependencies': [ (
        'reference': "types"
        'resolveInfo': "types"
    ) ]
    'entities': {
        `sysml-Subclassification`: (
            'key': "sysml-Subclassification"
            'name': "Subclassification"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-Specialization"
                    'resolveInfo': "Specialization"
                ) ]
                'features': {
                    `sysml-Subclassification-superclassifier`: (
                        'feature type': * [ (
                            'reference': "sysml-IClassifier"
                            'resolveInfo': "IClassifier"
                        ) ]
                        'key': "sysml-Subclassification-superclassifier"
                        'multiple': * "false"
                        'name': "superclassifier"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-Subclassification-owningClassifier`: (
                        'feature type': * [ (
                            'reference': "sysml-IClassifier"
                            'resolveInfo': "IClassifier"
                        ) ]
                        'key': "sysml-Subclassification-owningClassifier"
                        'multiple': * "false"
                        'name': "owningClassifier"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-Subclassification-subclassifier`: (
                        'feature type': * [ (
                            'reference': "sysml-IClassifier"
                            'resolveInfo': "IClassifier"
                        ) ]
                        'key': "sysml-Subclassification-subclassifier"
                        'multiple': * "false"
                        'name': "subclassifier"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-Specialization`: (
            'key': "sysml-Specialization"
            'name': "Specialization"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-Specialization-owningType`: (
                        'feature type': * [ (
                            'reference': "sysml-IType"
                            'resolveInfo': "IType"
                        ) ]
                        'key': "sysml-Specialization-owningType"
                        'multiple': * "false"
                        'name': "owningType"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-Specialization-general`: (
                        'feature type': * [ (
                            'reference': "sysml-IType"
                            'resolveInfo': "IType"
                        ) ]
                        'key': "sysml-Specialization-general"
                        'multiple': * "false"
                        'name': "general"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-Specialization-specific`: (
                        'feature type': * [ (
                            'reference': "sysml-IType"
                            'resolveInfo': "IType"
                        ) ]
                        'key': "sysml-Specialization-specific"
                        'multiple': * "false"
                        'name': "specific"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IRelationship"
                    'resolveInfo': "IRelationship"
                ) ]
                'partition': "false"
            )
        )
        `sysml-IRelationship`: (
            'key': "sysml-IRelationship"
            'name': "IRelationship"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-IElement"
                    'resolveInfo': "IElement"
                ) ]
                'features': {
                    `sysml-IRelationship-ownedRelatedElement`: (
                        'feature type': * [ (
                            'reference': "sysml-IElement"
                            'resolveInfo': "IElement"
                        ) ]
                        'key': "sysml-IRelationship-ownedRelatedElement"
                        'multiple': * "true"
                        'name': "ownedRelatedElement"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IRelationship-owningRelatedElement`: (
                        'feature type': * [ (
                            'reference': "sysml-IElement"
                            'resolveInfo': "IElement"
                        ) ]
                        'key': "sysml-IRelationship-owningRelatedElement"
                        'multiple': * "false"
                        'name': "owningRelatedElement"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IRelationship-relatedElement`: (
                        'feature type': * [ (
                            'reference': "sysml-IElement"
                            'resolveInfo': "IElement"
                        ) ]
                        'key': "sysml-IRelationship-relatedElement"
                        'multiple': * "true"
                        'name': "relatedElement"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IRelationship-target`: (
                        'feature type': * [ (
                            'reference': "sysml-IElement"
                            'resolveInfo': "IElement"
                        ) ]
                        'key': "sysml-IRelationship-target"
                        'multiple': * "true"
                        'name': "target"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IRelationship-source`: (
                        'feature type': * [ (
                            'reference': "sysml-IElement"
                            'resolveInfo': "IElement"
                        ) ]
                        'key': "sysml-IRelationship-source"
                        'multiple': * "true"
                        'name': "source"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IRelationship-isImplied`: (
                        'feature type': ~
                        'key': "sysml-IRelationship-isImplied"
                        'multiple': ~
                        'name': "isImplied"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-Boolean"
                            'resolveInfo': "Boolean"
                        ) ]
                    )
                }
            )
        )
        `sysml-IElement`: (
            'key': "sysml-IElement"
            'name': "IElement"
            'type': | 'interface' (
                'extends': [ ]
                'features': {
                    `sysml-IElement-owningMembership`: (
                        'feature type': * [ (
                            'reference': "sysml-OwningMembership"
                            'resolveInfo': "OwningMembership"
                        ) ]
                        'key': "sysml-IElement-owningMembership"
                        'multiple': * "false"
                        'name': "owningMembership"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IElement-owningNamespace`: (
                        'feature type': * [ (
                            'reference': "sysml-INamespace"
                            'resolveInfo': "INamespace"
                        ) ]
                        'key': "sysml-IElement-owningNamespace"
                        'multiple': * "false"
                        'name': "owningNamespace"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IElement-owningRelationship`: (
                        'feature type': * [ (
                            'reference': "sysml-IRelationship"
                            'resolveInfo': "IRelationship"
                        ) ]
                        'key': "sysml-IElement-owningRelationship"
                        'multiple': * "false"
                        'name': "owningRelationship"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IElement-elementId`: (
                        'feature type': ~
                        'key': "sysml-IElement-elementId"
                        'multiple': ~
                        'name': "elementId"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-String"
                            'resolveInfo': "String"
                        ) ]
                    )
                    `sysml-IElement-ownedRelationship`: (
                        'feature type': * [ (
                            'reference': "sysml-IRelationship"
                            'resolveInfo': "IRelationship"
                        ) ]
                        'key': "sysml-IElement-ownedRelationship"
                        'multiple': * "true"
                        'name': "ownedRelationship"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IElement-owner`: (
                        'feature type': * [ (
                            'reference': "sysml-IElement"
                            'resolveInfo': "IElement"
                        ) ]
                        'key': "sysml-IElement-owner"
                        'multiple': * "false"
                        'name': "owner"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IElement-ownedElement`: (
                        'feature type': * [ (
                            'reference': "sysml-IElement"
                            'resolveInfo': "IElement"
                        ) ]
                        'key': "sysml-IElement-ownedElement"
                        'multiple': * "true"
                        'name': "ownedElement"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IElement-documentation`: (
                        'feature type': * [ (
                            'reference': "sysml-Documentation"
                            'resolveInfo': "Documentation"
                        ) ]
                        'key': "sysml-IElement-documentation"
                        'multiple': * "true"
                        'name': "documentation"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IElement-ownedAnnotation`: (
                        'feature type': * [ (
                            'reference': "sysml-Annotation"
                            'resolveInfo': "Annotation"
                        ) ]
                        'key': "sysml-IElement-ownedAnnotation"
                        'multiple': * "true"
                        'name': "ownedAnnotation"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IElement-textualRepresentation`: (
                        'feature type': * [ (
                            'reference': "sysml-TextualRepresentation"
                            'resolveInfo': "TextualRepresentation"
                        ) ]
                        'key': "sysml-IElement-textualRepresentation"
                        'multiple': * "true"
                        'name': "textualRepresentation"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IElement-declaredShortName`: (
                        'feature type': ~
                        'key': "sysml-IElement-declaredShortName"
                        'multiple': ~
                        'name': "declaredShortName"
                        'optional': "true"
                        'property type': * [ (
                            'reference': "types-String"
                            'resolveInfo': "String"
                        ) ]
                    )
                    `sysml-IElement-declaredName`: (
                        'feature type': ~
                        'key': "sysml-IElement-declaredName"
                        'multiple': ~
                        'name': "declaredName"
                        'optional': "true"
                        'property type': * [ (
                            'reference': "types-String"
                            'resolveInfo': "String"
                        ) ]
                    )
                    `sysml-IElement-shortName`: (
                        'feature type': ~
                        'key': "sysml-IElement-shortName"
                        'multiple': ~
                        'name': "shortName"
                        'optional': "true"
                        'property type': * [ (
                            'reference': "types-String"
                            'resolveInfo': "String"
                        ) ]
                    )
                    `sysml-IElement-name`: (
                        'feature type': ~
                        'key': "sysml-IElement-name"
                        'multiple': ~
                        'name': "name"
                        'optional': "true"
                        'property type': * [ (
                            'reference': "types-String"
                            'resolveInfo': "String"
                        ) ]
                    )
                    `sysml-IElement-qualifiedName`: (
                        'feature type': ~
                        'key': "sysml-IElement-qualifiedName"
                        'multiple': ~
                        'name': "qualifiedName"
                        'optional': "true"
                        'property type': * [ (
                            'reference': "types-String"
                            'resolveInfo': "String"
                        ) ]
                    )
                    `sysml-IElement-isImpliedIncluded`: (
                        'feature type': ~
                        'key': "sysml-IElement-isImpliedIncluded"
                        'multiple': ~
                        'name': "isImpliedIncluded"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-Boolean"
                            'resolveInfo': "Boolean"
                        ) ]
                    )
                    `sysml-IElement-isLibraryElement`: (
                        'feature type': ~
                        'key': "sysml-IElement-isLibraryElement"
                        'multiple': ~
                        'name': "isLibraryElement"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-Boolean"
                            'resolveInfo': "Boolean"
                        ) ]
                    )
                    `sysml-IElement-aliasIdsContainer`: (
                        'feature type': * [ (
                            'reference': "sysml-AliasIdsContainer"
                            'resolveInfo': "AliasIdsContainer"
                        ) ]
                        'key': "sysml-IElement-aliasIdsContainer"
                        'multiple': * "true"
                        'name': "aliasIdsContainer"
                        'optional': "true"
                        'property type': ~
                    )
                }
            )
        )
        `sysml-OwningMembership`: (
            'key': "sysml-OwningMembership"
            'name': "OwningMembership"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-Membership"
                    'resolveInfo': "Membership"
                ) ]
                'features': {
                    `sysml-OwningMembership-ownedMemberElementId`: (
                        'feature type': ~
                        'key': "sysml-OwningMembership-ownedMemberElementId"
                        'multiple': ~
                        'name': "ownedMemberElementId"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-String"
                            'resolveInfo': "String"
                        ) ]
                    )
                    `sysml-OwningMembership-ownedMemberShortName`: (
                        'feature type': ~
                        'key': "sysml-OwningMembership-ownedMemberShortName"
                        'multiple': ~
                        'name': "ownedMemberShortName"
                        'optional': "true"
                        'property type': * [ (
                            'reference': "types-String"
                            'resolveInfo': "String"
                        ) ]
                    )
                    `sysml-OwningMembership-ownedMemberName`: (
                        'feature type': ~
                        'key': "sysml-OwningMembership-ownedMemberName"
                        'multiple': ~
                        'name': "ownedMemberName"
                        'optional': "true"
                        'property type': * [ (
                            'reference': "types-String"
                            'resolveInfo': "String"
                        ) ]
                    )
                    `sysml-OwningMembership-ownedMemberElement`: (
                        'feature type': * [ (
                            'reference': "sysml-IElement"
                            'resolveInfo': "IElement"
                        ) ]
                        'key': "sysml-OwningMembership-ownedMemberElement"
                        'multiple': * "false"
                        'name': "ownedMemberElement"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-Membership`: (
            'key': "sysml-Membership"
            'name': "Membership"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-Membership-memberElementId`: (
                        'feature type': ~
                        'key': "sysml-Membership-memberElementId"
                        'multiple': ~
                        'name': "memberElementId"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-String"
                            'resolveInfo': "String"
                        ) ]
                    )
                    `sysml-Membership-membershipOwningNamespace`: (
                        'feature type': * [ (
                            'reference': "sysml-INamespace"
                            'resolveInfo': "INamespace"
                        ) ]
                        'key': "sysml-Membership-membershipOwningNamespace"
                        'multiple': * "false"
                        'name': "membershipOwningNamespace"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-Membership-memberShortName`: (
                        'feature type': ~
                        'key': "sysml-Membership-memberShortName"
                        'multiple': ~
                        'name': "memberShortName"
                        'optional': "true"
                        'property type': * [ (
                            'reference': "types-String"
                            'resolveInfo': "String"
                        ) ]
                    )
                    `sysml-Membership-memberElement`: (
                        'feature type': * [ (
                            'reference': "sysml-IElement"
                            'resolveInfo': "IElement"
                        ) ]
                        'key': "sysml-Membership-memberElement"
                        'multiple': * "false"
                        'name': "memberElement"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-Membership-memberName`: (
                        'feature type': ~
                        'key': "sysml-Membership-memberName"
                        'multiple': ~
                        'name': "memberName"
                        'optional': "true"
                        'property type': * [ (
                            'reference': "types-String"
                            'resolveInfo': "String"
                        ) ]
                    )
                    `sysml-Membership-visibility`: (
                        'feature type': ~
                        'key': "sysml-Membership-visibility"
                        'multiple': ~
                        'name': "visibility"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "sysml-VisibilityKind"
                            'resolveInfo': "VisibilityKind"
                        ) ]
                    )
                }
                'implements': [ (
                    'reference': "sysml-IRelationship"
                    'resolveInfo': "IRelationship"
                ) ]
                'partition': "false"
            )
        )
        `sysml-INamespace`: (
            'key': "sysml-INamespace"
            'name': "INamespace"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-IElement"
                    'resolveInfo': "IElement"
                ) ]
                'features': {
                    `sysml-INamespace-membership`: (
                        'feature type': * [ (
                            'reference': "sysml-Membership"
                            'resolveInfo': "Membership"
                        ) ]
                        'key': "sysml-INamespace-membership"
                        'multiple': * "true"
                        'name': "membership"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-INamespace-ownedImport`: (
                        'feature type': * [ (
                            'reference': "sysml-IImport"
                            'resolveInfo': "IImport"
                        ) ]
                        'key': "sysml-INamespace-ownedImport"
                        'multiple': * "true"
                        'name': "ownedImport"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-INamespace-member`: (
                        'feature type': * [ (
                            'reference': "sysml-IElement"
                            'resolveInfo': "IElement"
                        ) ]
                        'key': "sysml-INamespace-member"
                        'multiple': * "true"
                        'name': "member"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-INamespace-ownedMember`: (
                        'feature type': * [ (
                            'reference': "sysml-IElement"
                            'resolveInfo': "IElement"
                        ) ]
                        'key': "sysml-INamespace-ownedMember"
                        'multiple': * "true"
                        'name': "ownedMember"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-INamespace-importedMembership`: (
                        'feature type': * [ (
                            'reference': "sysml-Membership"
                            'resolveInfo': "Membership"
                        ) ]
                        'key': "sysml-INamespace-importedMembership"
                        'multiple': * "true"
                        'name': "importedMembership"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-INamespace-ownedMembership`: (
                        'feature type': * [ (
                            'reference': "sysml-Membership"
                            'resolveInfo': "Membership"
                        ) ]
                        'key': "sysml-INamespace-ownedMembership"
                        'multiple': * "true"
                        'name': "ownedMembership"
                        'optional': "true"
                        'property type': ~
                    )
                }
            )
        )
        `sysml-IImport`: (
            'key': "sysml-IImport"
            'name': "IImport"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-IRelationship"
                    'resolveInfo': "IRelationship"
                ) ]
                'features': {
                    `sysml-IImport-visibility`: (
                        'feature type': ~
                        'key': "sysml-IImport-visibility"
                        'multiple': ~
                        'name': "visibility"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "sysml-VisibilityKind"
                            'resolveInfo': "VisibilityKind"
                        ) ]
                    )
                    `sysml-IImport-isRecursive`: (
                        'feature type': ~
                        'key': "sysml-IImport-isRecursive"
                        'multiple': ~
                        'name': "isRecursive"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-Boolean"
                            'resolveInfo': "Boolean"
                        ) ]
                    )
                    `sysml-IImport-isImportAll`: (
                        'feature type': ~
                        'key': "sysml-IImport-isImportAll"
                        'multiple': ~
                        'name': "isImportAll"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-Boolean"
                            'resolveInfo': "Boolean"
                        ) ]
                    )
                    `sysml-IImport-importedElement`: (
                        'feature type': * [ (
                            'reference': "sysml-IElement"
                            'resolveInfo': "IElement"
                        ) ]
                        'key': "sysml-IImport-importedElement"
                        'multiple': * "false"
                        'name': "importedElement"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-IImport-importOwningNamespace`: (
                        'feature type': * [ (
                            'reference': "sysml-INamespace"
                            'resolveInfo': "INamespace"
                        ) ]
                        'key': "sysml-IImport-importOwningNamespace"
                        'multiple': * "false"
                        'name': "importOwningNamespace"
                        'optional': "false"
                        'property type': ~
                    )
                }
            )
        )
        `sysml-VisibilityKind`: (
            'key': "sysml-VisibilityKind"
            'name': "VisibilityKind"
            'type': | 'enumeration' {
                `sysml-VisibilityKind-private`: (
                    'key': "sysml-VisibilityKind-private"
                    'name': "private"
                )
                `sysml-VisibilityKind-protected`: (
                    'key': "sysml-VisibilityKind-protected"
                    'name': "protected"
                )
                `sysml-VisibilityKind-public`: (
                    'key': "sysml-VisibilityKind-public"
                    'name': "public"
                )
            }
        )
        `sysml-Documentation`: (
            'key': "sysml-Documentation"
            'name': "Documentation"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-Comment"
                    'resolveInfo': "Comment"
                ) ]
                'features': {
                    `sysml-Documentation-documentedElement`: (
                        'feature type': * [ (
                            'reference': "sysml-IElement"
                            'resolveInfo': "IElement"
                        ) ]
                        'key': "sysml-Documentation-documentedElement"
                        'multiple': * "false"
                        'name': "documentedElement"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-Comment`: (
            'key': "sysml-Comment"
            'name': "Comment"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-Comment-locale`: (
                        'feature type': ~
                        'key': "sysml-Comment-locale"
                        'multiple': ~
                        'name': "locale"
                        'optional': "true"
                        'property type': * [ (
                            'reference': "types-String"
                            'resolveInfo': "String"
                        ) ]
                    )
                    `sysml-Comment-body`: (
                        'feature type': ~
                        'key': "sysml-Comment-body"
                        'multiple': ~
                        'name': "body"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-String"
                            'resolveInfo': "String"
                        ) ]
                    )
                }
                'implements': [ (
                    'reference': "sysml-IAnnotatingElement"
                    'resolveInfo': "IAnnotatingElement"
                ) ]
                'partition': "false"
            )
        )
        `sysml-IAnnotatingElement`: (
            'key': "sysml-IAnnotatingElement"
            'name': "IAnnotatingElement"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-IElement"
                    'resolveInfo': "IElement"
                ) ]
                'features': {
                    `sysml-IAnnotatingElement-annotatedElement`: (
                        'feature type': * [ (
                            'reference': "sysml-IElement"
                            'resolveInfo': "IElement"
                        ) ]
                        'key': "sysml-IAnnotatingElement-annotatedElement"
                        'multiple': * "true"
                        'name': "annotatedElement"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-IAnnotatingElement-ownedAnnotatingRelationship`: (
                        'feature type': * [ (
                            'reference': "sysml-Annotation"
                            'resolveInfo': "Annotation"
                        ) ]
                        'key': "sysml-IAnnotatingElement-ownedAnnotatingRelationship"
                        'multiple': * "true"
                        'name': "ownedAnnotatingRelationship"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IAnnotatingElement-annotation`: (
                        'feature type': * [ (
                            'reference': "sysml-Annotation"
                            'resolveInfo': "Annotation"
                        ) ]
                        'key': "sysml-IAnnotatingElement-annotation"
                        'multiple': * "true"
                        'name': "annotation"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IAnnotatingElement-owningAnnotatingRelationship`: (
                        'feature type': * [ (
                            'reference': "sysml-Annotation"
                            'resolveInfo': "Annotation"
                        ) ]
                        'key': "sysml-IAnnotatingElement-owningAnnotatingRelationship"
                        'multiple': * "false"
                        'name': "owningAnnotatingRelationship"
                        'optional': "true"
                        'property type': ~
                    )
                }
            )
        )
        `sysml-Annotation`: (
            'key': "sysml-Annotation"
            'name': "Annotation"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-Annotation-annotatingElement`: (
                        'feature type': * [ (
                            'reference': "sysml-IAnnotatingElement"
                            'resolveInfo': "IAnnotatingElement"
                        ) ]
                        'key': "sysml-Annotation-annotatingElement"
                        'multiple': * "false"
                        'name': "annotatingElement"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-Annotation-annotatedElement`: (
                        'feature type': * [ (
                            'reference': "sysml-IElement"
                            'resolveInfo': "IElement"
                        ) ]
                        'key': "sysml-Annotation-annotatedElement"
                        'multiple': * "false"
                        'name': "annotatedElement"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-Annotation-owningAnnotatedElement`: (
                        'feature type': * [ (
                            'reference': "sysml-IElement"
                            'resolveInfo': "IElement"
                        ) ]
                        'key': "sysml-Annotation-owningAnnotatedElement"
                        'multiple': * "false"
                        'name': "owningAnnotatedElement"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-Annotation-ownedAnnotatingElement`: (
                        'feature type': * [ (
                            'reference': "sysml-IAnnotatingElement"
                            'resolveInfo': "IAnnotatingElement"
                        ) ]
                        'key': "sysml-Annotation-ownedAnnotatingElement"
                        'multiple': * "false"
                        'name': "ownedAnnotatingElement"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-Annotation-owningAnnotatingElement`: (
                        'feature type': * [ (
                            'reference': "sysml-IAnnotatingElement"
                            'resolveInfo': "IAnnotatingElement"
                        ) ]
                        'key': "sysml-Annotation-owningAnnotatingElement"
                        'multiple': * "false"
                        'name': "owningAnnotatingElement"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IRelationship"
                    'resolveInfo': "IRelationship"
                ) ]
                'partition': "false"
            )
        )
        `sysml-TextualRepresentation`: (
            'key': "sysml-TextualRepresentation"
            'name': "TextualRepresentation"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-TextualRepresentation-language`: (
                        'feature type': ~
                        'key': "sysml-TextualRepresentation-language"
                        'multiple': ~
                        'name': "language"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-String"
                            'resolveInfo': "String"
                        ) ]
                    )
                    `sysml-TextualRepresentation-body`: (
                        'feature type': ~
                        'key': "sysml-TextualRepresentation-body"
                        'multiple': ~
                        'name': "body"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-String"
                            'resolveInfo': "String"
                        ) ]
                    )
                    `sysml-TextualRepresentation-representedElement`: (
                        'feature type': * [ (
                            'reference': "sysml-IElement"
                            'resolveInfo': "IElement"
                        ) ]
                        'key': "sysml-TextualRepresentation-representedElement"
                        'multiple': * "false"
                        'name': "representedElement"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IAnnotatingElement"
                    'resolveInfo': "IAnnotatingElement"
                ) ]
                'partition': "false"
            )
        )
        `sysml-IType`: (
            'key': "sysml-IType"
            'name': "IType"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-INamespace"
                    'resolveInfo': "INamespace"
                ) ]
                'features': {
                    `sysml-IType-ownedFeatureMembership`: (
                        'feature type': * [ (
                            'reference': "sysml-FeatureMembership"
                            'resolveInfo': "FeatureMembership"
                        ) ]
                        'key': "sysml-IType-ownedFeatureMembership"
                        'multiple': * "true"
                        'name': "ownedFeatureMembership"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IType-ownedFeature`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-IType-ownedFeature"
                        'multiple': * "true"
                        'name': "ownedFeature"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IType-ownedEndFeature`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-IType-ownedEndFeature"
                        'multiple': * "true"
                        'name': "ownedEndFeature"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IType-feature`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-IType-feature"
                        'multiple': * "true"
                        'name': "feature"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IType-input`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-IType-input"
                        'multiple': * "true"
                        'name': "input"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IType-output`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-IType-output"
                        'multiple': * "true"
                        'name': "output"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IType-isAbstract`: (
                        'feature type': ~
                        'key': "sysml-IType-isAbstract"
                        'multiple': ~
                        'name': "isAbstract"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-Boolean"
                            'resolveInfo': "Boolean"
                        ) ]
                    )
                    `sysml-IType-inheritedMembership`: (
                        'feature type': * [ (
                            'reference': "sysml-Membership"
                            'resolveInfo': "Membership"
                        ) ]
                        'key': "sysml-IType-inheritedMembership"
                        'multiple': * "true"
                        'name': "inheritedMembership"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IType-endFeature`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-IType-endFeature"
                        'multiple': * "true"
                        'name': "endFeature"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IType-isSufficient`: (
                        'feature type': ~
                        'key': "sysml-IType-isSufficient"
                        'multiple': ~
                        'name': "isSufficient"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-Boolean"
                            'resolveInfo': "Boolean"
                        ) ]
                    )
                    `sysml-IType-ownedConjugator`: (
                        'feature type': * [ (
                            'reference': "sysml-Conjugation"
                            'resolveInfo': "Conjugation"
                        ) ]
                        'key': "sysml-IType-ownedConjugator"
                        'multiple': * "false"
                        'name': "ownedConjugator"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IType-isConjugated`: (
                        'feature type': ~
                        'key': "sysml-IType-isConjugated"
                        'multiple': ~
                        'name': "isConjugated"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-Boolean"
                            'resolveInfo': "Boolean"
                        ) ]
                    )
                    `sysml-IType-inheritedFeature`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-IType-inheritedFeature"
                        'multiple': * "true"
                        'name': "inheritedFeature"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IType-multiplicity`: (
                        'feature type': * [ (
                            'reference': "sysml-Multiplicity"
                            'resolveInfo': "Multiplicity"
                        ) ]
                        'key': "sysml-IType-multiplicity"
                        'multiple': * "false"
                        'name': "multiplicity"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IType-unioningType`: (
                        'feature type': * [ (
                            'reference': "sysml-IType"
                            'resolveInfo': "IType"
                        ) ]
                        'key': "sysml-IType-unioningType"
                        'multiple': * "true"
                        'name': "unioningType"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IType-ownedIntersecting`: (
                        'feature type': * [ (
                            'reference': "sysml-Intersecting"
                            'resolveInfo': "Intersecting"
                        ) ]
                        'key': "sysml-IType-ownedIntersecting"
                        'multiple': * "true"
                        'name': "ownedIntersecting"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IType-intersectingType`: (
                        'feature type': * [ (
                            'reference': "sysml-IType"
                            'resolveInfo': "IType"
                        ) ]
                        'key': "sysml-IType-intersectingType"
                        'multiple': * "true"
                        'name': "intersectingType"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IType-ownedUnioning`: (
                        'feature type': * [ (
                            'reference': "sysml-Unioning"
                            'resolveInfo': "Unioning"
                        ) ]
                        'key': "sysml-IType-ownedUnioning"
                        'multiple': * "true"
                        'name': "ownedUnioning"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IType-ownedDisjoining`: (
                        'feature type': * [ (
                            'reference': "sysml-Disjoining"
                            'resolveInfo': "Disjoining"
                        ) ]
                        'key': "sysml-IType-ownedDisjoining"
                        'multiple': * "true"
                        'name': "ownedDisjoining"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IType-featureMembership`: (
                        'feature type': * [ (
                            'reference': "sysml-FeatureMembership"
                            'resolveInfo': "FeatureMembership"
                        ) ]
                        'key': "sysml-IType-featureMembership"
                        'multiple': * "true"
                        'name': "featureMembership"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IType-differencingType`: (
                        'feature type': * [ (
                            'reference': "sysml-IType"
                            'resolveInfo': "IType"
                        ) ]
                        'key': "sysml-IType-differencingType"
                        'multiple': * "true"
                        'name': "differencingType"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IType-ownedDifferencing`: (
                        'feature type': * [ (
                            'reference': "sysml-Differencing"
                            'resolveInfo': "Differencing"
                        ) ]
                        'key': "sysml-IType-ownedDifferencing"
                        'multiple': * "true"
                        'name': "ownedDifferencing"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IType-directedFeature`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-IType-directedFeature"
                        'multiple': * "true"
                        'name': "directedFeature"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IType-ownedSpecialization`: (
                        'feature type': * [ (
                            'reference': "sysml-Specialization"
                            'resolveInfo': "Specialization"
                        ) ]
                        'key': "sysml-IType-ownedSpecialization"
                        'multiple': * "true"
                        'name': "ownedSpecialization"
                        'optional': "true"
                        'property type': ~
                    )
                }
            )
        )
        `sysml-FeatureMembership`: (
            'key': "sysml-FeatureMembership"
            'name': "FeatureMembership"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-OwningMembership"
                    'resolveInfo': "OwningMembership"
                ) ]
                'features': {
                    `sysml-FeatureMembership-ownedMemberFeature`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-FeatureMembership-ownedMemberFeature"
                        'multiple': * "false"
                        'name': "ownedMemberFeature"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-FeatureMembership-owningType`: (
                        'feature type': * [ (
                            'reference': "sysml-IType"
                            'resolveInfo': "IType"
                        ) ]
                        'key': "sysml-FeatureMembership-owningType"
                        'multiple': * "false"
                        'name': "owningType"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IFeaturing"
                    'resolveInfo': "IFeaturing"
                ) ]
                'partition': "false"
            )
        )
        `sysml-IFeaturing`: (
            'key': "sysml-IFeaturing"
            'name': "IFeaturing"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-IRelationship"
                    'resolveInfo': "IRelationship"
                ) ]
                'features': {
                    `sysml-IFeaturing-type`: (
                        'feature type': * [ (
                            'reference': "sysml-IType"
                            'resolveInfo': "IType"
                        ) ]
                        'key': "sysml-IFeaturing-type"
                        'multiple': * "false"
                        'name': "type"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-IFeaturing-feature`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-IFeaturing-feature"
                        'multiple': * "false"
                        'name': "feature"
                        'optional': "false"
                        'property type': ~
                    )
                }
            )
        )
        `sysml-IFeature`: (
            'key': "sysml-IFeature"
            'name': "IFeature"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-IType"
                    'resolveInfo': "IType"
                ) ]
                'features': {
                    `sysml-IFeature-owningType`: (
                        'feature type': * [ (
                            'reference': "sysml-IType"
                            'resolveInfo': "IType"
                        ) ]
                        'key': "sysml-IFeature-owningType"
                        'multiple': * "false"
                        'name': "owningType"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IFeature-isUnique`: (
                        'feature type': ~
                        'key': "sysml-IFeature-isUnique"
                        'multiple': ~
                        'name': "isUnique"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-Boolean"
                            'resolveInfo': "Boolean"
                        ) ]
                    )
                    `sysml-IFeature-isOrdered`: (
                        'feature type': ~
                        'key': "sysml-IFeature-isOrdered"
                        'multiple': ~
                        'name': "isOrdered"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-Boolean"
                            'resolveInfo': "Boolean"
                        ) ]
                    )
                    `sysml-IFeature-type`: (
                        'feature type': * [ (
                            'reference': "sysml-IType"
                            'resolveInfo': "IType"
                        ) ]
                        'key': "sysml-IFeature-type"
                        'multiple': * "true"
                        'name': "type"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IFeature-ownedRedefinition`: (
                        'feature type': * [ (
                            'reference': "sysml-Redefinition"
                            'resolveInfo': "Redefinition"
                        ) ]
                        'key': "sysml-IFeature-ownedRedefinition"
                        'multiple': * "true"
                        'name': "ownedRedefinition"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IFeature-ownedSubsetting`: (
                        'feature type': * [ (
                            'reference': "sysml-Subsetting"
                            'resolveInfo': "Subsetting"
                        ) ]
                        'key': "sysml-IFeature-ownedSubsetting"
                        'multiple': * "true"
                        'name': "ownedSubsetting"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IFeature-owningFeatureMembership`: (
                        'feature type': * [ (
                            'reference': "sysml-FeatureMembership"
                            'resolveInfo': "FeatureMembership"
                        ) ]
                        'key': "sysml-IFeature-owningFeatureMembership"
                        'multiple': * "false"
                        'name': "owningFeatureMembership"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IFeature-isComposite`: (
                        'feature type': ~
                        'key': "sysml-IFeature-isComposite"
                        'multiple': ~
                        'name': "isComposite"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-Boolean"
                            'resolveInfo': "Boolean"
                        ) ]
                    )
                    `sysml-IFeature-isEnd`: (
                        'feature type': ~
                        'key': "sysml-IFeature-isEnd"
                        'multiple': ~
                        'name': "isEnd"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-Boolean"
                            'resolveInfo': "Boolean"
                        ) ]
                    )
                    `sysml-IFeature-endOwningType`: (
                        'feature type': * [ (
                            'reference': "sysml-IType"
                            'resolveInfo': "IType"
                        ) ]
                        'key': "sysml-IFeature-endOwningType"
                        'multiple': * "false"
                        'name': "endOwningType"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IFeature-ownedTyping`: (
                        'feature type': * [ (
                            'reference': "sysml-FeatureTyping"
                            'resolveInfo': "FeatureTyping"
                        ) ]
                        'key': "sysml-IFeature-ownedTyping"
                        'multiple': * "true"
                        'name': "ownedTyping"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IFeature-featuringType`: (
                        'feature type': * [ (
                            'reference': "sysml-IType"
                            'resolveInfo': "IType"
                        ) ]
                        'key': "sysml-IFeature-featuringType"
                        'multiple': * "true"
                        'name': "featuringType"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IFeature-ownedTypeFeaturing`: (
                        'feature type': * [ (
                            'reference': "sysml-TypeFeaturing"
                            'resolveInfo': "TypeFeaturing"
                        ) ]
                        'key': "sysml-IFeature-ownedTypeFeaturing"
                        'multiple': * "true"
                        'name': "ownedTypeFeaturing"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IFeature-isDerived`: (
                        'feature type': ~
                        'key': "sysml-IFeature-isDerived"
                        'multiple': ~
                        'name': "isDerived"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-Boolean"
                            'resolveInfo': "Boolean"
                        ) ]
                    )
                    `sysml-IFeature-chainingFeature`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-IFeature-chainingFeature"
                        'multiple': * "true"
                        'name': "chainingFeature"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IFeature-ownedFeatureInverting`: (
                        'feature type': * [ (
                            'reference': "sysml-FeatureInverting"
                            'resolveInfo': "FeatureInverting"
                        ) ]
                        'key': "sysml-IFeature-ownedFeatureInverting"
                        'multiple': * "true"
                        'name': "ownedFeatureInverting"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IFeature-ownedFeatureChaining`: (
                        'feature type': * [ (
                            'reference': "sysml-FeatureChaining"
                            'resolveInfo': "FeatureChaining"
                        ) ]
                        'key': "sysml-IFeature-ownedFeatureChaining"
                        'multiple': * "true"
                        'name': "ownedFeatureChaining"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IFeature-isReadOnly`: (
                        'feature type': ~
                        'key': "sysml-IFeature-isReadOnly"
                        'multiple': ~
                        'name': "isReadOnly"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-Boolean"
                            'resolveInfo': "Boolean"
                        ) ]
                    )
                    `sysml-IFeature-isPortion`: (
                        'feature type': ~
                        'key': "sysml-IFeature-isPortion"
                        'multiple': ~
                        'name': "isPortion"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-Boolean"
                            'resolveInfo': "Boolean"
                        ) ]
                    )
                    `sysml-IFeature-direction`: (
                        'feature type': ~
                        'key': "sysml-IFeature-direction"
                        'multiple': ~
                        'name': "direction"
                        'optional': "true"
                        'property type': * [ (
                            'reference': "sysml-FeatureDirectionKind"
                            'resolveInfo': "FeatureDirectionKind"
                        ) ]
                    )
                    `sysml-IFeature-ownedReferenceSubsetting`: (
                        'feature type': * [ (
                            'reference': "sysml-ReferenceSubsetting"
                            'resolveInfo': "ReferenceSubsetting"
                        ) ]
                        'key': "sysml-IFeature-ownedReferenceSubsetting"
                        'multiple': * "false"
                        'name': "ownedReferenceSubsetting"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IFeature-crossFeature`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-IFeature-crossFeature"
                        'multiple': * "false"
                        'name': "crossFeature"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IFeature-ownedCrossSubsetting`: (
                        'feature type': * [ (
                            'reference': "sysml-CrossSubsetting"
                            'resolveInfo': "CrossSubsetting"
                        ) ]
                        'key': "sysml-IFeature-ownedCrossSubsetting"
                        'multiple': * "false"
                        'name': "ownedCrossSubsetting"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IFeature-featureTarget`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-IFeature-featureTarget"
                        'multiple': * "false"
                        'name': "featureTarget"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-IFeature-isNonunique`: (
                        'feature type': ~
                        'key': "sysml-IFeature-isNonunique"
                        'multiple': ~
                        'name': "isNonunique"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-Boolean"
                            'resolveInfo': "Boolean"
                        ) ]
                    )
                }
            )
        )
        `sysml-Redefinition`: (
            'key': "sysml-Redefinition"
            'name': "Redefinition"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-Subsetting"
                    'resolveInfo': "Subsetting"
                ) ]
                'features': {
                    `sysml-Redefinition-redefiningFeature`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-Redefinition-redefiningFeature"
                        'multiple': * "false"
                        'name': "redefiningFeature"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-Redefinition-redefinedFeature`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-Redefinition-redefinedFeature"
                        'multiple': * "false"
                        'name': "redefinedFeature"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-Subsetting`: (
            'key': "sysml-Subsetting"
            'name': "Subsetting"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-Specialization"
                    'resolveInfo': "Specialization"
                ) ]
                'features': {
                    `sysml-Subsetting-subsettedFeature`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-Subsetting-subsettedFeature"
                        'multiple': * "false"
                        'name': "subsettedFeature"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-Subsetting-subsettingFeature`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-Subsetting-subsettingFeature"
                        'multiple': * "false"
                        'name': "subsettingFeature"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-Subsetting-owningFeature`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-Subsetting-owningFeature"
                        'multiple': * "false"
                        'name': "owningFeature"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-FeatureTyping`: (
            'key': "sysml-FeatureTyping"
            'name': "FeatureTyping"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-Specialization"
                    'resolveInfo': "Specialization"
                ) ]
                'features': {
                    `sysml-FeatureTyping-typedFeature`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-FeatureTyping-typedFeature"
                        'multiple': * "false"
                        'name': "typedFeature"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-FeatureTyping-type`: (
                        'feature type': * [ (
                            'reference': "sysml-IType"
                            'resolveInfo': "IType"
                        ) ]
                        'key': "sysml-FeatureTyping-type"
                        'multiple': * "false"
                        'name': "type"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-FeatureTyping-owningFeature`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-FeatureTyping-owningFeature"
                        'multiple': * "false"
                        'name': "owningFeature"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-TypeFeaturing`: (
            'key': "sysml-TypeFeaturing"
            'name': "TypeFeaturing"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-TypeFeaturing-featureOfType`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-TypeFeaturing-featureOfType"
                        'multiple': * "false"
                        'name': "featureOfType"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-TypeFeaturing-featuringType`: (
                        'feature type': * [ (
                            'reference': "sysml-IType"
                            'resolveInfo': "IType"
                        ) ]
                        'key': "sysml-TypeFeaturing-featuringType"
                        'multiple': * "false"
                        'name': "featuringType"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-TypeFeaturing-owningFeatureOfType`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-TypeFeaturing-owningFeatureOfType"
                        'multiple': * "false"
                        'name': "owningFeatureOfType"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IFeaturing"
                    'resolveInfo': "IFeaturing"
                ) ]
                'partition': "false"
            )
        )
        `sysml-FeatureInverting`: (
            'key': "sysml-FeatureInverting"
            'name': "FeatureInverting"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-FeatureInverting-featureInverted`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-FeatureInverting-featureInverted"
                        'multiple': * "false"
                        'name': "featureInverted"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-FeatureInverting-invertingFeature`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-FeatureInverting-invertingFeature"
                        'multiple': * "false"
                        'name': "invertingFeature"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-FeatureInverting-owningFeature`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-FeatureInverting-owningFeature"
                        'multiple': * "false"
                        'name': "owningFeature"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IRelationship"
                    'resolveInfo': "IRelationship"
                ) ]
                'partition': "false"
            )
        )
        `sysml-FeatureChaining`: (
            'key': "sysml-FeatureChaining"
            'name': "FeatureChaining"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-FeatureChaining-chainingFeature`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-FeatureChaining-chainingFeature"
                        'multiple': * "false"
                        'name': "chainingFeature"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-FeatureChaining-featureChained`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-FeatureChaining-featureChained"
                        'multiple': * "false"
                        'name': "featureChained"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IRelationship"
                    'resolveInfo': "IRelationship"
                ) ]
                'partition': "false"
            )
        )
        `sysml-FeatureDirectionKind`: (
            'key': "sysml-FeatureDirectionKind"
            'name': "FeatureDirectionKind"
            'type': | 'enumeration' {
                `sysml-FeatureDirectionKind-in`: (
                    'key': "sysml-FeatureDirectionKind-in"
                    'name': "in"
                )
                `sysml-FeatureDirectionKind-inout`: (
                    'key': "sysml-FeatureDirectionKind-inout"
                    'name': "inout"
                )
                `sysml-FeatureDirectionKind-out`: (
                    'key': "sysml-FeatureDirectionKind-out"
                    'name': "out"
                )
            }
        )
        `sysml-ReferenceSubsetting`: (
            'key': "sysml-ReferenceSubsetting"
            'name': "ReferenceSubsetting"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-Subsetting"
                    'resolveInfo': "Subsetting"
                ) ]
                'features': {
                    `sysml-ReferenceSubsetting-referencedFeature`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-ReferenceSubsetting-referencedFeature"
                        'multiple': * "false"
                        'name': "referencedFeature"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-ReferenceSubsetting-referencingFeature`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-ReferenceSubsetting-referencingFeature"
                        'multiple': * "false"
                        'name': "referencingFeature"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-CrossSubsetting`: (
            'key': "sysml-CrossSubsetting"
            'name': "CrossSubsetting"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-Subsetting"
                    'resolveInfo': "Subsetting"
                ) ]
                'features': {
                    `sysml-CrossSubsetting-crossedFeature`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-CrossSubsetting-crossedFeature"
                        'multiple': * "false"
                        'name': "crossedFeature"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-CrossSubsetting-crossingFeature`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-CrossSubsetting-crossingFeature"
                        'multiple': * "false"
                        'name': "crossingFeature"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-Conjugation`: (
            'key': "sysml-Conjugation"
            'name': "Conjugation"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-Conjugation-originalType`: (
                        'feature type': * [ (
                            'reference': "sysml-IType"
                            'resolveInfo': "IType"
                        ) ]
                        'key': "sysml-Conjugation-originalType"
                        'multiple': * "false"
                        'name': "originalType"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-Conjugation-conjugatedType`: (
                        'feature type': * [ (
                            'reference': "sysml-IType"
                            'resolveInfo': "IType"
                        ) ]
                        'key': "sysml-Conjugation-conjugatedType"
                        'multiple': * "false"
                        'name': "conjugatedType"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-Conjugation-owningType`: (
                        'feature type': * [ (
                            'reference': "sysml-IType"
                            'resolveInfo': "IType"
                        ) ]
                        'key': "sysml-Conjugation-owningType"
                        'multiple': * "false"
                        'name': "owningType"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IRelationship"
                    'resolveInfo': "IRelationship"
                ) ]
                'partition': "false"
            )
        )
        `sysml-Multiplicity`: (
            'key': "sysml-Multiplicity"
            'name': "Multiplicity"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IFeature"
                    'resolveInfo': "IFeature"
                ) ]
                'partition': "false"
            )
        )
        `sysml-Intersecting`: (
            'key': "sysml-Intersecting"
            'name': "Intersecting"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-Intersecting-intersectingType`: (
                        'feature type': * [ (
                            'reference': "sysml-IType"
                            'resolveInfo': "IType"
                        ) ]
                        'key': "sysml-Intersecting-intersectingType"
                        'multiple': * "false"
                        'name': "intersectingType"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-Intersecting-typeIntersected`: (
                        'feature type': * [ (
                            'reference': "sysml-IType"
                            'resolveInfo': "IType"
                        ) ]
                        'key': "sysml-Intersecting-typeIntersected"
                        'multiple': * "false"
                        'name': "typeIntersected"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IRelationship"
                    'resolveInfo': "IRelationship"
                ) ]
                'partition': "false"
            )
        )
        `sysml-Unioning`: (
            'key': "sysml-Unioning"
            'name': "Unioning"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-Unioning-unioningType`: (
                        'feature type': * [ (
                            'reference': "sysml-IType"
                            'resolveInfo': "IType"
                        ) ]
                        'key': "sysml-Unioning-unioningType"
                        'multiple': * "false"
                        'name': "unioningType"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-Unioning-typeUnioned`: (
                        'feature type': * [ (
                            'reference': "sysml-IType"
                            'resolveInfo': "IType"
                        ) ]
                        'key': "sysml-Unioning-typeUnioned"
                        'multiple': * "false"
                        'name': "typeUnioned"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IRelationship"
                    'resolveInfo': "IRelationship"
                ) ]
                'partition': "false"
            )
        )
        `sysml-Disjoining`: (
            'key': "sysml-Disjoining"
            'name': "Disjoining"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-Disjoining-typeDisjoined`: (
                        'feature type': * [ (
                            'reference': "sysml-IType"
                            'resolveInfo': "IType"
                        ) ]
                        'key': "sysml-Disjoining-typeDisjoined"
                        'multiple': * "false"
                        'name': "typeDisjoined"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-Disjoining-disjoiningType`: (
                        'feature type': * [ (
                            'reference': "sysml-IType"
                            'resolveInfo': "IType"
                        ) ]
                        'key': "sysml-Disjoining-disjoiningType"
                        'multiple': * "false"
                        'name': "disjoiningType"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-Disjoining-owningType`: (
                        'feature type': * [ (
                            'reference': "sysml-IType"
                            'resolveInfo': "IType"
                        ) ]
                        'key': "sysml-Disjoining-owningType"
                        'multiple': * "false"
                        'name': "owningType"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IRelationship"
                    'resolveInfo': "IRelationship"
                ) ]
                'partition': "false"
            )
        )
        `sysml-Differencing`: (
            'key': "sysml-Differencing"
            'name': "Differencing"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-Differencing-differencingType`: (
                        'feature type': * [ (
                            'reference': "sysml-IType"
                            'resolveInfo': "IType"
                        ) ]
                        'key': "sysml-Differencing-differencingType"
                        'multiple': * "false"
                        'name': "differencingType"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-Differencing-typeDifferenced`: (
                        'feature type': * [ (
                            'reference': "sysml-IType"
                            'resolveInfo': "IType"
                        ) ]
                        'key': "sysml-Differencing-typeDifferenced"
                        'multiple': * "false"
                        'name': "typeDifferenced"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IRelationship"
                    'resolveInfo': "IRelationship"
                ) ]
                'partition': "false"
            )
        )
        `sysml-IClassifier`: (
            'key': "sysml-IClassifier"
            'name': "IClassifier"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-IType"
                    'resolveInfo': "IType"
                ) ]
                'features': {
                    `sysml-IClassifier-ownedSubclassification`: (
                        'feature type': * [ (
                            'reference': "sysml-Subclassification"
                            'resolveInfo': "Subclassification"
                        ) ]
                        'key': "sysml-IClassifier-ownedSubclassification"
                        'multiple': * "true"
                        'name': "ownedSubclassification"
                        'optional': "true"
                        'property type': ~
                    )
                }
            )
        )
        `sysml-EndFeatureMembership`: (
            'key': "sysml-EndFeatureMembership"
            'name': "EndFeatureMembership"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-FeatureMembership"
                    'resolveInfo': "FeatureMembership"
                ) ]
                'features': {
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-IExpression`: (
            'key': "sysml-IExpression"
            'name': "IExpression"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-IStep"
                    'resolveInfo': "IStep"
                ) ]
                'features': {
                    `sysml-IExpression-function`: (
                        'feature type': * [ (
                            'reference': "sysml-IFunction"
                            'resolveInfo': "IFunction"
                        ) ]
                        'key': "sysml-IExpression-function"
                        'multiple': * "false"
                        'name': "function"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IExpression-result`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-IExpression-result"
                        'multiple': * "false"
                        'name': "result"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-IExpression-isModelLevelEvaluable`: (
                        'feature type': ~
                        'key': "sysml-IExpression-isModelLevelEvaluable"
                        'multiple': ~
                        'name': "isModelLevelEvaluable"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-Boolean"
                            'resolveInfo': "Boolean"
                        ) ]
                    )
                }
            )
        )
        `sysml-IStep`: (
            'key': "sysml-IStep"
            'name': "IStep"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-IFeature"
                    'resolveInfo': "IFeature"
                ) ]
                'features': {
                    `sysml-IStep-behavior`: (
                        'feature type': * [ (
                            'reference': "sysml-IBehavior"
                            'resolveInfo': "IBehavior"
                        ) ]
                        'key': "sysml-IStep-behavior"
                        'multiple': * "true"
                        'name': "behavior"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IStep-parameter`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-IStep-parameter"
                        'multiple': * "true"
                        'name': "parameter"
                        'optional': "true"
                        'property type': ~
                    )
                }
            )
        )
        `sysml-IBehavior`: (
            'key': "sysml-IBehavior"
            'name': "IBehavior"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-IClass"
                    'resolveInfo': "IClass"
                ) ]
                'features': {
                    `sysml-IBehavior-step`: (
                        'feature type': * [ (
                            'reference': "sysml-IStep"
                            'resolveInfo': "IStep"
                        ) ]
                        'key': "sysml-IBehavior-step"
                        'multiple': * "true"
                        'name': "step"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IBehavior-parameter`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-IBehavior-parameter"
                        'multiple': * "true"
                        'name': "parameter"
                        'optional': "true"
                        'property type': ~
                    )
                }
            )
        )
        `sysml-IClass`: (
            'key': "sysml-IClass"
            'name': "IClass"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-IClassifier"
                    'resolveInfo': "IClassifier"
                ) ]
                'features': {
                }
            )
        )
        `sysml-IFunction`: (
            'key': "sysml-IFunction"
            'name': "IFunction"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-IBehavior"
                    'resolveInfo': "IBehavior"
                ) ]
                'features': {
                    `sysml-IFunction-expression`: (
                        'feature type': * [ (
                            'reference': "sysml-IExpression"
                            'resolveInfo': "IExpression"
                        ) ]
                        'key': "sysml-IFunction-expression"
                        'multiple': * "true"
                        'name': "expression"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IFunction-result`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-IFunction-result"
                        'multiple': * "false"
                        'name': "result"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-IFunction-isModelLevelEvaluable`: (
                        'feature type': ~
                        'key': "sysml-IFunction-isModelLevelEvaluable"
                        'multiple': ~
                        'name': "isModelLevelEvaluable"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-Boolean"
                            'resolveInfo': "Boolean"
                        ) ]
                    )
                }
            )
        )
        `sysml-ResultExpressionMembership`: (
            'key': "sysml-ResultExpressionMembership"
            'name': "ResultExpressionMembership"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-FeatureMembership"
                    'resolveInfo': "FeatureMembership"
                ) ]
                'features': {
                    `sysml-ResultExpressionMembership-ownedResultExpression`: (
                        'feature type': * [ (
                            'reference': "sysml-IExpression"
                            'resolveInfo': "IExpression"
                        ) ]
                        'key': "sysml-ResultExpressionMembership-ownedResultExpression"
                        'multiple': * "false"
                        'name': "ownedResultExpression"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-IInvariant`: (
            'key': "sysml-IInvariant"
            'name': "IInvariant"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-IBooleanExpression"
                    'resolveInfo': "IBooleanExpression"
                ) ]
                'features': {
                    `sysml-IInvariant-isNegated`: (
                        'feature type': ~
                        'key': "sysml-IInvariant-isNegated"
                        'multiple': ~
                        'name': "isNegated"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-Boolean"
                            'resolveInfo': "Boolean"
                        ) ]
                    )
                }
            )
        )
        `sysml-IBooleanExpression`: (
            'key': "sysml-IBooleanExpression"
            'name': "IBooleanExpression"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-IExpression"
                    'resolveInfo': "IExpression"
                ) ]
                'features': {
                    `sysml-IBooleanExpression-predicate`: (
                        'feature type': * [ (
                            'reference': "sysml-IPredicate"
                            'resolveInfo': "IPredicate"
                        ) ]
                        'key': "sysml-IBooleanExpression-predicate"
                        'multiple': * "false"
                        'name': "predicate"
                        'optional': "true"
                        'property type': ~
                    )
                }
            )
        )
        `sysml-IPredicate`: (
            'key': "sysml-IPredicate"
            'name': "IPredicate"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-IFunction"
                    'resolveInfo': "IFunction"
                ) ]
                'features': {
                }
            )
        )
        `sysml-ReturnParameterMembership`: (
            'key': "sysml-ReturnParameterMembership"
            'name': "ReturnParameterMembership"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-ParameterMembership"
                    'resolveInfo': "ParameterMembership"
                ) ]
                'features': {
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-ParameterMembership`: (
            'key': "sysml-ParameterMembership"
            'name': "ParameterMembership"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-FeatureMembership"
                    'resolveInfo': "FeatureMembership"
                ) ]
                'features': {
                    `sysml-ParameterMembership-ownedMemberParameter`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-ParameterMembership-ownedMemberParameter"
                        'multiple': * "false"
                        'name': "ownedMemberParameter"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-MultiplicityRange`: (
            'key': "sysml-MultiplicityRange"
            'name': "MultiplicityRange"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-Multiplicity"
                    'resolveInfo': "Multiplicity"
                ) ]
                'features': {
                    `sysml-MultiplicityRange-lowerBound`: (
                        'feature type': * [ (
                            'reference': "sysml-IExpression"
                            'resolveInfo': "IExpression"
                        ) ]
                        'key': "sysml-MultiplicityRange-lowerBound"
                        'multiple': * "false"
                        'name': "lowerBound"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-MultiplicityRange-upperBound`: (
                        'feature type': * [ (
                            'reference': "sysml-IExpression"
                            'resolveInfo': "IExpression"
                        ) ]
                        'key': "sysml-MultiplicityRange-upperBound"
                        'multiple': * "false"
                        'name': "upperBound"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-MultiplicityRange-bound`: (
                        'feature type': * [ (
                            'reference': "sysml-IExpression"
                            'resolveInfo': "IExpression"
                        ) ]
                        'key': "sysml-MultiplicityRange-bound"
                        'multiple': * "true"
                        'name': "bound"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-IStructure`: (
            'key': "sysml-IStructure"
            'name': "IStructure"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-IClass"
                    'resolveInfo': "IClass"
                ) ]
                'features': {
                }
            )
        )
        `sysml-FeatureValue`: (
            'key': "sysml-FeatureValue"
            'name': "FeatureValue"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-OwningMembership"
                    'resolveInfo': "OwningMembership"
                ) ]
                'features': {
                    `sysml-FeatureValue-featureWithValue`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-FeatureValue-featureWithValue"
                        'multiple': * "false"
                        'name': "featureWithValue"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-FeatureValue-value`: (
                        'feature type': * [ (
                            'reference': "sysml-IExpression"
                            'resolveInfo': "IExpression"
                        ) ]
                        'key': "sysml-FeatureValue-value"
                        'multiple': * "false"
                        'name': "value"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-FeatureValue-isInitial`: (
                        'feature type': ~
                        'key': "sysml-FeatureValue-isInitial"
                        'multiple': ~
                        'name': "isInitial"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-Boolean"
                            'resolveInfo': "Boolean"
                        ) ]
                    )
                    `sysml-FeatureValue-isDefault`: (
                        'feature type': ~
                        'key': "sysml-FeatureValue-isDefault"
                        'multiple': ~
                        'name': "isDefault"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-Boolean"
                            'resolveInfo': "Boolean"
                        ) ]
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-IMetaclass`: (
            'key': "sysml-IMetaclass"
            'name': "IMetaclass"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-IStructure"
                    'resolveInfo': "IStructure"
                ) ]
                'features': {
                }
            )
        )
        `sysml-MetadataFeature`: (
            'key': "sysml-MetadataFeature"
            'name': "MetadataFeature"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-MetadataFeature-metaclass`: (
                        'feature type': * [ (
                            'reference': "sysml-IMetaclass"
                            'resolveInfo': "IMetaclass"
                        ) ]
                        'key': "sysml-MetadataFeature-metaclass"
                        'multiple': * "false"
                        'name': "metaclass"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IFeature"
                    'resolveInfo': "IFeature"
                ) (
                    'reference': "sysml-IAnnotatingElement"
                    'resolveInfo': "IAnnotatingElement"
                ) ]
                'partition': "false"
            )
        )
        `sysml-IItemFlow`: (
            'key': "sysml-IItemFlow"
            'name': "IItemFlow"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-IConnector"
                    'resolveInfo': "IConnector"
                ) (
                    'reference': "sysml-IStep"
                    'resolveInfo': "IStep"
                ) ]
                'features': {
                    `sysml-IItemFlow-itemType`: (
                        'feature type': * [ (
                            'reference': "sysml-IClassifier"
                            'resolveInfo': "IClassifier"
                        ) ]
                        'key': "sysml-IItemFlow-itemType"
                        'multiple': * "true"
                        'name': "itemType"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IItemFlow-targetInputFeature`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-IItemFlow-targetInputFeature"
                        'multiple': * "false"
                        'name': "targetInputFeature"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IItemFlow-sourceOutputFeature`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-IItemFlow-sourceOutputFeature"
                        'multiple': * "false"
                        'name': "sourceOutputFeature"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IItemFlow-itemFlowEnd`: (
                        'feature type': * [ (
                            'reference': "sysml-ItemFlowEnd"
                            'resolveInfo': "ItemFlowEnd"
                        ) ]
                        'key': "sysml-IItemFlow-itemFlowEnd"
                        'multiple': * "true"
                        'name': "itemFlowEnd"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IItemFlow-itemFeature`: (
                        'feature type': * [ (
                            'reference': "sysml-ItemFeature"
                            'resolveInfo': "ItemFeature"
                        ) ]
                        'key': "sysml-IItemFlow-itemFeature"
                        'multiple': * "false"
                        'name': "itemFeature"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IItemFlow-interaction`: (
                        'feature type': * [ (
                            'reference': "sysml-IInteraction"
                            'resolveInfo': "IInteraction"
                        ) ]
                        'key': "sysml-IItemFlow-interaction"
                        'multiple': * "true"
                        'name': "interaction"
                        'optional': "true"
                        'property type': ~
                    )
                }
            )
        )
        `sysml-IConnector`: (
            'key': "sysml-IConnector"
            'name': "IConnector"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-IFeature"
                    'resolveInfo': "IFeature"
                ) (
                    'reference': "sysml-IRelationship"
                    'resolveInfo': "IRelationship"
                ) ]
                'features': {
                    `sysml-IConnector-relatedFeature`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-IConnector-relatedFeature"
                        'multiple': * "true"
                        'name': "relatedFeature"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IConnector-association`: (
                        'feature type': * [ (
                            'reference': "sysml-IAssociation"
                            'resolveInfo': "IAssociation"
                        ) ]
                        'key': "sysml-IConnector-association"
                        'multiple': * "true"
                        'name': "association"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IConnector-connectorEnd`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-IConnector-connectorEnd"
                        'multiple': * "true"
                        'name': "connectorEnd"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IConnector-sourceFeature`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-IConnector-sourceFeature"
                        'multiple': * "false"
                        'name': "sourceFeature"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IConnector-targetFeature`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-IConnector-targetFeature"
                        'multiple': * "true"
                        'name': "targetFeature"
                        'optional': "true"
                        'property type': ~
                    )
                }
            )
        )
        `sysml-IAssociation`: (
            'key': "sysml-IAssociation"
            'name': "IAssociation"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-IClassifier"
                    'resolveInfo': "IClassifier"
                ) (
                    'reference': "sysml-IRelationship"
                    'resolveInfo': "IRelationship"
                ) ]
                'features': {
                    `sysml-IAssociation-relatedType`: (
                        'feature type': * [ (
                            'reference': "sysml-IType"
                            'resolveInfo': "IType"
                        ) ]
                        'key': "sysml-IAssociation-relatedType"
                        'multiple': * "true"
                        'name': "relatedType"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IAssociation-sourceType`: (
                        'feature type': * [ (
                            'reference': "sysml-IType"
                            'resolveInfo': "IType"
                        ) ]
                        'key': "sysml-IAssociation-sourceType"
                        'multiple': * "false"
                        'name': "sourceType"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IAssociation-targetType`: (
                        'feature type': * [ (
                            'reference': "sysml-IType"
                            'resolveInfo': "IType"
                        ) ]
                        'key': "sysml-IAssociation-targetType"
                        'multiple': * "true"
                        'name': "targetType"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IAssociation-associationEnd`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-IAssociation-associationEnd"
                        'multiple': * "true"
                        'name': "associationEnd"
                        'optional': "true"
                        'property type': ~
                    )
                }
            )
        )
        `sysml-ItemFlowEnd`: (
            'key': "sysml-ItemFlowEnd"
            'name': "ItemFlowEnd"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IFeature"
                    'resolveInfo': "IFeature"
                ) ]
                'partition': "false"
            )
        )
        `sysml-ItemFeature`: (
            'key': "sysml-ItemFeature"
            'name': "ItemFeature"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IFeature"
                    'resolveInfo': "IFeature"
                ) ]
                'partition': "false"
            )
        )
        `sysml-IInteraction`: (
            'key': "sysml-IInteraction"
            'name': "IInteraction"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-IAssociation"
                    'resolveInfo': "IAssociation"
                ) (
                    'reference': "sysml-IBehavior"
                    'resolveInfo': "IBehavior"
                ) ]
                'features': {
                }
            )
        )
        `sysml-ISuccessionItemFlow`: (
            'key': "sysml-ISuccessionItemFlow"
            'name': "ISuccessionItemFlow"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-IItemFlow"
                    'resolveInfo': "IItemFlow"
                ) (
                    'reference': "sysml-ISuccession"
                    'resolveInfo': "ISuccession"
                ) ]
                'features': {
                }
            )
        )
        `sysml-ISuccession`: (
            'key': "sysml-ISuccession"
            'name': "ISuccession"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-IConnector"
                    'resolveInfo': "IConnector"
                ) ]
                'features': {
                    `sysml-ISuccession-transitionStep`: (
                        'feature type': * [ (
                            'reference': "sysml-IStep"
                            'resolveInfo': "IStep"
                        ) ]
                        'key': "sysml-ISuccession-transitionStep"
                        'multiple': * "false"
                        'name': "transitionStep"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-ISuccession-triggerStep`: (
                        'feature type': * [ (
                            'reference': "sysml-IStep"
                            'resolveInfo': "IStep"
                        ) ]
                        'key': "sysml-ISuccession-triggerStep"
                        'multiple': * "true"
                        'name': "triggerStep"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-ISuccession-effectStep`: (
                        'feature type': * [ (
                            'reference': "sysml-IStep"
                            'resolveInfo': "IStep"
                        ) ]
                        'key': "sysml-ISuccession-effectStep"
                        'multiple': * "true"
                        'name': "effectStep"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-ISuccession-guardExpression`: (
                        'feature type': * [ (
                            'reference': "sysml-IExpression"
                            'resolveInfo': "IExpression"
                        ) ]
                        'key': "sysml-ISuccession-guardExpression"
                        'multiple': * "true"
                        'name': "guardExpression"
                        'optional': "true"
                        'property type': ~
                    )
                }
            )
        )
        `sysml-ElementFilterMembership`: (
            'key': "sysml-ElementFilterMembership"
            'name': "ElementFilterMembership"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-OwningMembership"
                    'resolveInfo': "OwningMembership"
                ) ]
                'features': {
                    `sysml-ElementFilterMembership-condition`: (
                        'feature type': * [ (
                            'reference': "sysml-IExpression"
                            'resolveInfo': "IExpression"
                        ) ]
                        'key': "sysml-ElementFilterMembership-condition"
                        'multiple': * "false"
                        'name': "condition"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-Package`: (
            'key': "sysml-Package"
            'name': "Package"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-Package-filterCondition`: (
                        'feature type': * [ (
                            'reference': "sysml-IExpression"
                            'resolveInfo': "IExpression"
                        ) ]
                        'key': "sysml-Package-filterCondition"
                        'multiple': * "true"
                        'name': "filterCondition"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-INamespace"
                    'resolveInfo': "INamespace"
                ) ]
                'partition': "false"
            )
        )
        `sysml-LibraryPackage`: (
            'key': "sysml-LibraryPackage"
            'name': "LibraryPackage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-Package"
                    'resolveInfo': "Package"
                ) ]
                'features': {
                    `sysml-LibraryPackage-isStandard`: (
                        'feature type': ~
                        'key': "sysml-LibraryPackage-isStandard"
                        'multiple': ~
                        'name': "isStandard"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-Boolean"
                            'resolveInfo': "Boolean"
                        ) ]
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-IDataType`: (
            'key': "sysml-IDataType"
            'name': "IDataType"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-IClassifier"
                    'resolveInfo': "IClassifier"
                ) ]
                'features': {
                }
            )
        )
        `sysml-FeatureReferenceExpression`: (
            'key': "sysml-FeatureReferenceExpression"
            'name': "FeatureReferenceExpression"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-FeatureReferenceExpression-referent`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-FeatureReferenceExpression-referent"
                        'multiple': * "false"
                        'name': "referent"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IExpression"
                    'resolveInfo': "IExpression"
                ) ]
                'partition': "false"
            )
        )
        `sysml-MetadataAccessExpression`: (
            'key': "sysml-MetadataAccessExpression"
            'name': "MetadataAccessExpression"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-MetadataAccessExpression-referencedElement`: (
                        'feature type': * [ (
                            'reference': "sysml-IElement"
                            'resolveInfo': "IElement"
                        ) ]
                        'key': "sysml-MetadataAccessExpression-referencedElement"
                        'multiple': * "false"
                        'name': "referencedElement"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IExpression"
                    'resolveInfo': "IExpression"
                ) ]
                'partition': "false"
            )
        )
        `sysml-NullExpression`: (
            'key': "sysml-NullExpression"
            'name': "NullExpression"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IExpression"
                    'resolveInfo': "IExpression"
                ) ]
                'partition': "false"
            )
        )
        `sysml-IndexExpression`: (
            'key': "sysml-IndexExpression"
            'name': "IndexExpression"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-OperatorExpression"
                    'resolveInfo': "OperatorExpression"
                ) ]
                'features': {
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-OperatorExpression`: (
            'key': "sysml-OperatorExpression"
            'name': "OperatorExpression"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-InvocationExpression"
                    'resolveInfo': "InvocationExpression"
                ) ]
                'features': {
                    `sysml-OperatorExpression-operator`: (
                        'feature type': ~
                        'key': "sysml-OperatorExpression-operator"
                        'multiple': ~
                        'name': "operator"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-String"
                            'resolveInfo': "String"
                        ) ]
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-InvocationExpression`: (
            'key': "sysml-InvocationExpression"
            'name': "InvocationExpression"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-InvocationExpression-argument`: (
                        'feature type': * [ (
                            'reference': "sysml-IExpression"
                            'resolveInfo': "IExpression"
                        ) ]
                        'key': "sysml-InvocationExpression-argument"
                        'multiple': * "true"
                        'name': "argument"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-InvocationExpression-operand`: (
                        'feature type': * [ (
                            'reference': "sysml-IExpression"
                            'resolveInfo': "IExpression"
                        ) ]
                        'key': "sysml-InvocationExpression-operand"
                        'multiple': * "true"
                        'name': "operand"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IExpression"
                    'resolveInfo': "IExpression"
                ) ]
                'partition': "false"
            )
        )
        `sysml-CollectExpression`: (
            'key': "sysml-CollectExpression"
            'name': "CollectExpression"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-OperatorExpression"
                    'resolveInfo': "OperatorExpression"
                ) ]
                'features': {
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-LiteralInfinity`: (
            'key': "sysml-LiteralInfinity"
            'name': "LiteralInfinity"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-LiteralExpression"
                    'resolveInfo': "LiteralExpression"
                ) ]
                'features': {
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-LiteralExpression`: (
            'key': "sysml-LiteralExpression"
            'name': "LiteralExpression"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IExpression"
                    'resolveInfo': "IExpression"
                ) ]
                'partition': "false"
            )
        )
        `sysml-LiteralInteger`: (
            'key': "sysml-LiteralInteger"
            'name': "LiteralInteger"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-LiteralExpression"
                    'resolveInfo': "LiteralExpression"
                ) ]
                'features': {
                    `sysml-LiteralInteger-value`: (
                        'feature type': ~
                        'key': "sysml-LiteralInteger-value"
                        'multiple': ~
                        'name': "value"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-Integer"
                            'resolveInfo': "Integer"
                        ) ]
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-SelectExpression`: (
            'key': "sysml-SelectExpression"
            'name': "SelectExpression"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-OperatorExpression"
                    'resolveInfo': "OperatorExpression"
                ) ]
                'features': {
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-LiteralRational`: (
            'key': "sysml-LiteralRational"
            'name': "LiteralRational"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-LiteralExpression"
                    'resolveInfo': "LiteralExpression"
                ) ]
                'features': {
                    `sysml-LiteralRational-value`: (
                        'feature type': ~
                        'key': "sysml-LiteralRational-value"
                        'multiple': ~
                        'name': "value"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-Real"
                            'resolveInfo': "Real"
                        ) ]
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-LiteralBoolean`: (
            'key': "sysml-LiteralBoolean"
            'name': "LiteralBoolean"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-LiteralExpression"
                    'resolveInfo': "LiteralExpression"
                ) ]
                'features': {
                    `sysml-LiteralBoolean-value`: (
                        'feature type': ~
                        'key': "sysml-LiteralBoolean-value"
                        'multiple': ~
                        'name': "value"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-Boolean"
                            'resolveInfo': "Boolean"
                        ) ]
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-LiteralString`: (
            'key': "sysml-LiteralString"
            'name': "LiteralString"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-LiteralExpression"
                    'resolveInfo': "LiteralExpression"
                ) ]
                'features': {
                    `sysml-LiteralString-value`: (
                        'feature type': ~
                        'key': "sysml-LiteralString-value"
                        'multiple': ~
                        'name': "value"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-String"
                            'resolveInfo': "String"
                        ) ]
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-FeatureChainExpression`: (
            'key': "sysml-FeatureChainExpression"
            'name': "FeatureChainExpression"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-OperatorExpression"
                    'resolveInfo': "OperatorExpression"
                ) ]
                'features': {
                    `sysml-FeatureChainExpression-targetFeature`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-FeatureChainExpression-targetFeature"
                        'multiple': * "false"
                        'name': "targetFeature"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-IBindingConnector`: (
            'key': "sysml-IBindingConnector"
            'name': "IBindingConnector"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-IConnector"
                    'resolveInfo': "IConnector"
                ) ]
                'features': {
                }
            )
        )
        `sysml-IAssociationStructure`: (
            'key': "sysml-IAssociationStructure"
            'name': "IAssociationStructure"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-IAssociation"
                    'resolveInfo': "IAssociation"
                ) (
                    'reference': "sysml-IStructure"
                    'resolveInfo': "IStructure"
                ) ]
                'features': {
                }
            )
        )
        `sysml-Dependency`: (
            'key': "sysml-Dependency"
            'name': "Dependency"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-Dependency-client`: (
                        'feature type': * [ (
                            'reference': "sysml-IElement"
                            'resolveInfo': "IElement"
                        ) ]
                        'key': "sysml-Dependency-client"
                        'multiple': * "true"
                        'name': "client"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-Dependency-supplier`: (
                        'feature type': * [ (
                            'reference': "sysml-IElement"
                            'resolveInfo': "IElement"
                        ) ]
                        'key': "sysml-Dependency-supplier"
                        'multiple': * "true"
                        'name': "supplier"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IRelationship"
                    'resolveInfo': "IRelationship"
                ) ]
                'partition': "false"
            )
        )
        `sysml-NamespaceImport`: (
            'key': "sysml-NamespaceImport"
            'name': "NamespaceImport"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-NamespaceImport-importedNamespace`: (
                        'feature type': * [ (
                            'reference': "sysml-INamespace"
                            'resolveInfo': "INamespace"
                        ) ]
                        'key': "sysml-NamespaceImport-importedNamespace"
                        'multiple': * "false"
                        'name': "importedNamespace"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IImport"
                    'resolveInfo': "IImport"
                ) ]
                'partition': "false"
            )
        )
        `sysml-MembershipImport`: (
            'key': "sysml-MembershipImport"
            'name': "MembershipImport"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-MembershipImport-importedMembership`: (
                        'feature type': * [ (
                            'reference': "sysml-Membership"
                            'resolveInfo': "Membership"
                        ) ]
                        'key': "sysml-MembershipImport-importedMembership"
                        'multiple': * "false"
                        'name': "importedMembership"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IImport"
                    'resolveInfo': "IImport"
                ) ]
                'partition': "false"
            )
        )
        `sysml-InterfaceUsage`: (
            'key': "sysml-InterfaceUsage"
            'name': "InterfaceUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-ConnectionUsage"
                    'resolveInfo': "ConnectionUsage"
                ) ]
                'features': {
                    `sysml-InterfaceUsage-interfaceDefinition`: (
                        'feature type': * [ (
                            'reference': "sysml-InterfaceDefinition"
                            'resolveInfo': "InterfaceDefinition"
                        ) ]
                        'key': "sysml-InterfaceUsage-interfaceDefinition"
                        'multiple': * "true"
                        'name': "interfaceDefinition"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-ConnectionUsage`: (
            'key': "sysml-ConnectionUsage"
            'name': "ConnectionUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-ConnectorAsUsage"
                    'resolveInfo': "ConnectorAsUsage"
                ) ]
                'features': {
                    `sysml-ConnectionUsage-connectionDefinition`: (
                        'feature type': * [ (
                            'reference': "sysml-IAssociationStructure"
                            'resolveInfo': "IAssociationStructure"
                        ) ]
                        'key': "sysml-ConnectionUsage-connectionDefinition"
                        'multiple': * "true"
                        'name': "connectionDefinition"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IPartUsage"
                    'resolveInfo': "IPartUsage"
                ) ]
                'partition': "false"
            )
        )
        `sysml-ConnectorAsUsage`: (
            'key': "sysml-ConnectorAsUsage"
            'name': "ConnectorAsUsage"
            'type': | 'concept' (
                'abstract': "true"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IUsage"
                    'resolveInfo': "IUsage"
                ) (
                    'reference': "sysml-IConnector"
                    'resolveInfo': "IConnector"
                ) ]
                'partition': "false"
            )
        )
        `sysml-IUsage`: (
            'key': "sysml-IUsage"
            'name': "IUsage"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-IFeature"
                    'resolveInfo': "IFeature"
                ) ]
                'features': {
                    `sysml-IUsage-isReference`: (
                        'feature type': ~
                        'key': "sysml-IUsage-isReference"
                        'multiple': ~
                        'name': "isReference"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-Boolean"
                            'resolveInfo': "Boolean"
                        ) ]
                    )
                    `sysml-IUsage-isVariation`: (
                        'feature type': ~
                        'key': "sysml-IUsage-isVariation"
                        'multiple': ~
                        'name': "isVariation"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-Boolean"
                            'resolveInfo': "Boolean"
                        ) ]
                    )
                    `sysml-IUsage-variant`: (
                        'feature type': * [ (
                            'reference': "sysml-IUsage"
                            'resolveInfo': "IUsage"
                        ) ]
                        'key': "sysml-IUsage-variant"
                        'multiple': * "true"
                        'name': "variant"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IUsage-variantMembership`: (
                        'feature type': * [ (
                            'reference': "sysml-VariantMembership"
                            'resolveInfo': "VariantMembership"
                        ) ]
                        'key': "sysml-IUsage-variantMembership"
                        'multiple': * "true"
                        'name': "variantMembership"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IUsage-owningDefinition`: (
                        'feature type': * [ (
                            'reference': "sysml-Definition"
                            'resolveInfo': "Definition"
                        ) ]
                        'key': "sysml-IUsage-owningDefinition"
                        'multiple': * "false"
                        'name': "owningDefinition"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IUsage-owningUsage`: (
                        'feature type': * [ (
                            'reference': "sysml-IUsage"
                            'resolveInfo': "IUsage"
                        ) ]
                        'key': "sysml-IUsage-owningUsage"
                        'multiple': * "false"
                        'name': "owningUsage"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IUsage-nestedUsage`: (
                        'feature type': * [ (
                            'reference': "sysml-IUsage"
                            'resolveInfo': "IUsage"
                        ) ]
                        'key': "sysml-IUsage-nestedUsage"
                        'multiple': * "true"
                        'name': "nestedUsage"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IUsage-definition`: (
                        'feature type': * [ (
                            'reference': "sysml-IClassifier"
                            'resolveInfo': "IClassifier"
                        ) ]
                        'key': "sysml-IUsage-definition"
                        'multiple': * "true"
                        'name': "definition"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IUsage-usage`: (
                        'feature type': * [ (
                            'reference': "sysml-IUsage"
                            'resolveInfo': "IUsage"
                        ) ]
                        'key': "sysml-IUsage-usage"
                        'multiple': * "true"
                        'name': "usage"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IUsage-directedUsage`: (
                        'feature type': * [ (
                            'reference': "sysml-IUsage"
                            'resolveInfo': "IUsage"
                        ) ]
                        'key': "sysml-IUsage-directedUsage"
                        'multiple': * "true"
                        'name': "directedUsage"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IUsage-nestedReference`: (
                        'feature type': * [ (
                            'reference': "sysml-ReferenceUsage"
                            'resolveInfo': "ReferenceUsage"
                        ) ]
                        'key': "sysml-IUsage-nestedReference"
                        'multiple': * "true"
                        'name': "nestedReference"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IUsage-nestedAttribute`: (
                        'feature type': * [ (
                            'reference': "sysml-AttributeUsage"
                            'resolveInfo': "AttributeUsage"
                        ) ]
                        'key': "sysml-IUsage-nestedAttribute"
                        'multiple': * "true"
                        'name': "nestedAttribute"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IUsage-nestedEnumeration`: (
                        'feature type': * [ (
                            'reference': "sysml-EnumerationUsage"
                            'resolveInfo': "EnumerationUsage"
                        ) ]
                        'key': "sysml-IUsage-nestedEnumeration"
                        'multiple': * "true"
                        'name': "nestedEnumeration"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IUsage-nestedOccurrence`: (
                        'feature type': * [ (
                            'reference': "sysml-IOccurrenceUsage"
                            'resolveInfo': "IOccurrenceUsage"
                        ) ]
                        'key': "sysml-IUsage-nestedOccurrence"
                        'multiple': * "true"
                        'name': "nestedOccurrence"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IUsage-nestedItem`: (
                        'feature type': * [ (
                            'reference': "sysml-IItemUsage"
                            'resolveInfo': "IItemUsage"
                        ) ]
                        'key': "sysml-IUsage-nestedItem"
                        'multiple': * "true"
                        'name': "nestedItem"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IUsage-nestedPart`: (
                        'feature type': * [ (
                            'reference': "sysml-IPartUsage"
                            'resolveInfo': "IPartUsage"
                        ) ]
                        'key': "sysml-IUsage-nestedPart"
                        'multiple': * "true"
                        'name': "nestedPart"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IUsage-nestedPort`: (
                        'feature type': * [ (
                            'reference': "sysml-PortUsage"
                            'resolveInfo': "PortUsage"
                        ) ]
                        'key': "sysml-IUsage-nestedPort"
                        'multiple': * "true"
                        'name': "nestedPort"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IUsage-nestedConnection`: (
                        'feature type': * [ (
                            'reference': "sysml-ConnectorAsUsage"
                            'resolveInfo': "ConnectorAsUsage"
                        ) ]
                        'key': "sysml-IUsage-nestedConnection"
                        'multiple': * "true"
                        'name': "nestedConnection"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IUsage-nestedFlow`: (
                        'feature type': * [ (
                            'reference': "sysml-FlowConnectionUsage"
                            'resolveInfo': "FlowConnectionUsage"
                        ) ]
                        'key': "sysml-IUsage-nestedFlow"
                        'multiple': * "true"
                        'name': "nestedFlow"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IUsage-nestedInterface`: (
                        'feature type': * [ (
                            'reference': "sysml-InterfaceUsage"
                            'resolveInfo': "InterfaceUsage"
                        ) ]
                        'key': "sysml-IUsage-nestedInterface"
                        'multiple': * "true"
                        'name': "nestedInterface"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IUsage-nestedAllocation`: (
                        'feature type': * [ (
                            'reference': "sysml-AllocationUsage"
                            'resolveInfo': "AllocationUsage"
                        ) ]
                        'key': "sysml-IUsage-nestedAllocation"
                        'multiple': * "true"
                        'name': "nestedAllocation"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IUsage-nestedAction`: (
                        'feature type': * [ (
                            'reference': "sysml-IActionUsage"
                            'resolveInfo': "IActionUsage"
                        ) ]
                        'key': "sysml-IUsage-nestedAction"
                        'multiple': * "true"
                        'name': "nestedAction"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IUsage-nestedState`: (
                        'feature type': * [ (
                            'reference': "sysml-StateUsage"
                            'resolveInfo': "StateUsage"
                        ) ]
                        'key': "sysml-IUsage-nestedState"
                        'multiple': * "true"
                        'name': "nestedState"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IUsage-nestedTransition`: (
                        'feature type': * [ (
                            'reference': "sysml-TransitionUsage"
                            'resolveInfo': "TransitionUsage"
                        ) ]
                        'key': "sysml-IUsage-nestedTransition"
                        'multiple': * "true"
                        'name': "nestedTransition"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IUsage-nestedCalculation`: (
                        'feature type': * [ (
                            'reference': "sysml-CalculationUsage"
                            'resolveInfo': "CalculationUsage"
                        ) ]
                        'key': "sysml-IUsage-nestedCalculation"
                        'multiple': * "true"
                        'name': "nestedCalculation"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IUsage-nestedConstraint`: (
                        'feature type': * [ (
                            'reference': "sysml-IConstraintUsage"
                            'resolveInfo': "IConstraintUsage"
                        ) ]
                        'key': "sysml-IUsage-nestedConstraint"
                        'multiple': * "true"
                        'name': "nestedConstraint"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IUsage-nestedRequirement`: (
                        'feature type': * [ (
                            'reference': "sysml-RequirementUsage"
                            'resolveInfo': "RequirementUsage"
                        ) ]
                        'key': "sysml-IUsage-nestedRequirement"
                        'multiple': * "true"
                        'name': "nestedRequirement"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IUsage-nestedConcern`: (
                        'feature type': * [ (
                            'reference': "sysml-ConcernUsage"
                            'resolveInfo': "ConcernUsage"
                        ) ]
                        'key': "sysml-IUsage-nestedConcern"
                        'multiple': * "true"
                        'name': "nestedConcern"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IUsage-nestedCase`: (
                        'feature type': * [ (
                            'reference': "sysml-CaseUsage"
                            'resolveInfo': "CaseUsage"
                        ) ]
                        'key': "sysml-IUsage-nestedCase"
                        'multiple': * "true"
                        'name': "nestedCase"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IUsage-nestedAnalysisCase`: (
                        'feature type': * [ (
                            'reference': "sysml-AnalysisCaseUsage"
                            'resolveInfo': "AnalysisCaseUsage"
                        ) ]
                        'key': "sysml-IUsage-nestedAnalysisCase"
                        'multiple': * "true"
                        'name': "nestedAnalysisCase"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IUsage-nestedVerificationCase`: (
                        'feature type': * [ (
                            'reference': "sysml-VerificationCaseUsage"
                            'resolveInfo': "VerificationCaseUsage"
                        ) ]
                        'key': "sysml-IUsage-nestedVerificationCase"
                        'multiple': * "true"
                        'name': "nestedVerificationCase"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IUsage-nestedUseCase`: (
                        'feature type': * [ (
                            'reference': "sysml-UseCaseUsage"
                            'resolveInfo': "UseCaseUsage"
                        ) ]
                        'key': "sysml-IUsage-nestedUseCase"
                        'multiple': * "true"
                        'name': "nestedUseCase"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IUsage-nestedView`: (
                        'feature type': * [ (
                            'reference': "sysml-ViewUsage"
                            'resolveInfo': "ViewUsage"
                        ) ]
                        'key': "sysml-IUsage-nestedView"
                        'multiple': * "true"
                        'name': "nestedView"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IUsage-nestedViewpoint`: (
                        'feature type': * [ (
                            'reference': "sysml-ViewpointUsage"
                            'resolveInfo': "ViewpointUsage"
                        ) ]
                        'key': "sysml-IUsage-nestedViewpoint"
                        'multiple': * "true"
                        'name': "nestedViewpoint"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IUsage-nestedRendering`: (
                        'feature type': * [ (
                            'reference': "sysml-RenderingUsage"
                            'resolveInfo': "RenderingUsage"
                        ) ]
                        'key': "sysml-IUsage-nestedRendering"
                        'multiple': * "true"
                        'name': "nestedRendering"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IUsage-nestedMetadata`: (
                        'feature type': * [ (
                            'reference': "sysml-MetadataUsage"
                            'resolveInfo': "MetadataUsage"
                        ) ]
                        'key': "sysml-IUsage-nestedMetadata"
                        'multiple': * "true"
                        'name': "nestedMetadata"
                        'optional': "true"
                        'property type': ~
                    )
                }
            )
        )
        `sysml-VariantMembership`: (
            'key': "sysml-VariantMembership"
            'name': "VariantMembership"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-OwningMembership"
                    'resolveInfo': "OwningMembership"
                ) ]
                'features': {
                    `sysml-VariantMembership-ownedVariantUsage`: (
                        'feature type': * [ (
                            'reference': "sysml-IUsage"
                            'resolveInfo': "IUsage"
                        ) ]
                        'key': "sysml-VariantMembership-ownedVariantUsage"
                        'multiple': * "false"
                        'name': "ownedVariantUsage"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-Definition`: (
            'key': "sysml-Definition"
            'name': "Definition"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-Definition-isVariation`: (
                        'feature type': ~
                        'key': "sysml-Definition-isVariation"
                        'multiple': ~
                        'name': "isVariation"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-Boolean"
                            'resolveInfo': "Boolean"
                        ) ]
                    )
                    `sysml-Definition-variant`: (
                        'feature type': * [ (
                            'reference': "sysml-IUsage"
                            'resolveInfo': "IUsage"
                        ) ]
                        'key': "sysml-Definition-variant"
                        'multiple': * "true"
                        'name': "variant"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-Definition-variantMembership`: (
                        'feature type': * [ (
                            'reference': "sysml-VariantMembership"
                            'resolveInfo': "VariantMembership"
                        ) ]
                        'key': "sysml-Definition-variantMembership"
                        'multiple': * "true"
                        'name': "variantMembership"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-Definition-usage`: (
                        'feature type': * [ (
                            'reference': "sysml-IUsage"
                            'resolveInfo': "IUsage"
                        ) ]
                        'key': "sysml-Definition-usage"
                        'multiple': * "true"
                        'name': "usage"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-Definition-directedUsage`: (
                        'feature type': * [ (
                            'reference': "sysml-IUsage"
                            'resolveInfo': "IUsage"
                        ) ]
                        'key': "sysml-Definition-directedUsage"
                        'multiple': * "true"
                        'name': "directedUsage"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-Definition-ownedReference`: (
                        'feature type': * [ (
                            'reference': "sysml-ReferenceUsage"
                            'resolveInfo': "ReferenceUsage"
                        ) ]
                        'key': "sysml-Definition-ownedReference"
                        'multiple': * "true"
                        'name': "ownedReference"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-Definition-ownedAttribute`: (
                        'feature type': * [ (
                            'reference': "sysml-AttributeUsage"
                            'resolveInfo': "AttributeUsage"
                        ) ]
                        'key': "sysml-Definition-ownedAttribute"
                        'multiple': * "true"
                        'name': "ownedAttribute"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-Definition-ownedEnumeration`: (
                        'feature type': * [ (
                            'reference': "sysml-EnumerationUsage"
                            'resolveInfo': "EnumerationUsage"
                        ) ]
                        'key': "sysml-Definition-ownedEnumeration"
                        'multiple': * "true"
                        'name': "ownedEnumeration"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-Definition-ownedOccurrence`: (
                        'feature type': * [ (
                            'reference': "sysml-IOccurrenceUsage"
                            'resolveInfo': "IOccurrenceUsage"
                        ) ]
                        'key': "sysml-Definition-ownedOccurrence"
                        'multiple': * "true"
                        'name': "ownedOccurrence"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-Definition-ownedItem`: (
                        'feature type': * [ (
                            'reference': "sysml-IItemUsage"
                            'resolveInfo': "IItemUsage"
                        ) ]
                        'key': "sysml-Definition-ownedItem"
                        'multiple': * "true"
                        'name': "ownedItem"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-Definition-ownedPart`: (
                        'feature type': * [ (
                            'reference': "sysml-IPartUsage"
                            'resolveInfo': "IPartUsage"
                        ) ]
                        'key': "sysml-Definition-ownedPart"
                        'multiple': * "true"
                        'name': "ownedPart"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-Definition-ownedPort`: (
                        'feature type': * [ (
                            'reference': "sysml-PortUsage"
                            'resolveInfo': "PortUsage"
                        ) ]
                        'key': "sysml-Definition-ownedPort"
                        'multiple': * "true"
                        'name': "ownedPort"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-Definition-ownedConnection`: (
                        'feature type': * [ (
                            'reference': "sysml-ConnectorAsUsage"
                            'resolveInfo': "ConnectorAsUsage"
                        ) ]
                        'key': "sysml-Definition-ownedConnection"
                        'multiple': * "true"
                        'name': "ownedConnection"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-Definition-ownedFlow`: (
                        'feature type': * [ (
                            'reference': "sysml-FlowConnectionUsage"
                            'resolveInfo': "FlowConnectionUsage"
                        ) ]
                        'key': "sysml-Definition-ownedFlow"
                        'multiple': * "true"
                        'name': "ownedFlow"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-Definition-ownedInterface`: (
                        'feature type': * [ (
                            'reference': "sysml-InterfaceUsage"
                            'resolveInfo': "InterfaceUsage"
                        ) ]
                        'key': "sysml-Definition-ownedInterface"
                        'multiple': * "true"
                        'name': "ownedInterface"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-Definition-ownedAllocation`: (
                        'feature type': * [ (
                            'reference': "sysml-AllocationUsage"
                            'resolveInfo': "AllocationUsage"
                        ) ]
                        'key': "sysml-Definition-ownedAllocation"
                        'multiple': * "true"
                        'name': "ownedAllocation"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-Definition-ownedAction`: (
                        'feature type': * [ (
                            'reference': "sysml-IActionUsage"
                            'resolveInfo': "IActionUsage"
                        ) ]
                        'key': "sysml-Definition-ownedAction"
                        'multiple': * "true"
                        'name': "ownedAction"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-Definition-ownedState`: (
                        'feature type': * [ (
                            'reference': "sysml-StateUsage"
                            'resolveInfo': "StateUsage"
                        ) ]
                        'key': "sysml-Definition-ownedState"
                        'multiple': * "true"
                        'name': "ownedState"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-Definition-ownedTransition`: (
                        'feature type': * [ (
                            'reference': "sysml-TransitionUsage"
                            'resolveInfo': "TransitionUsage"
                        ) ]
                        'key': "sysml-Definition-ownedTransition"
                        'multiple': * "true"
                        'name': "ownedTransition"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-Definition-ownedCalculation`: (
                        'feature type': * [ (
                            'reference': "sysml-CalculationUsage"
                            'resolveInfo': "CalculationUsage"
                        ) ]
                        'key': "sysml-Definition-ownedCalculation"
                        'multiple': * "true"
                        'name': "ownedCalculation"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-Definition-ownedConstraint`: (
                        'feature type': * [ (
                            'reference': "sysml-IConstraintUsage"
                            'resolveInfo': "IConstraintUsage"
                        ) ]
                        'key': "sysml-Definition-ownedConstraint"
                        'multiple': * "true"
                        'name': "ownedConstraint"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-Definition-ownedRequirement`: (
                        'feature type': * [ (
                            'reference': "sysml-RequirementUsage"
                            'resolveInfo': "RequirementUsage"
                        ) ]
                        'key': "sysml-Definition-ownedRequirement"
                        'multiple': * "true"
                        'name': "ownedRequirement"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-Definition-ownedConcern`: (
                        'feature type': * [ (
                            'reference': "sysml-ConcernUsage"
                            'resolveInfo': "ConcernUsage"
                        ) ]
                        'key': "sysml-Definition-ownedConcern"
                        'multiple': * "true"
                        'name': "ownedConcern"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-Definition-ownedCase`: (
                        'feature type': * [ (
                            'reference': "sysml-CaseUsage"
                            'resolveInfo': "CaseUsage"
                        ) ]
                        'key': "sysml-Definition-ownedCase"
                        'multiple': * "true"
                        'name': "ownedCase"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-Definition-ownedAnalysisCase`: (
                        'feature type': * [ (
                            'reference': "sysml-AnalysisCaseUsage"
                            'resolveInfo': "AnalysisCaseUsage"
                        ) ]
                        'key': "sysml-Definition-ownedAnalysisCase"
                        'multiple': * "true"
                        'name': "ownedAnalysisCase"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-Definition-ownedVerificationCase`: (
                        'feature type': * [ (
                            'reference': "sysml-VerificationCaseUsage"
                            'resolveInfo': "VerificationCaseUsage"
                        ) ]
                        'key': "sysml-Definition-ownedVerificationCase"
                        'multiple': * "true"
                        'name': "ownedVerificationCase"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-Definition-ownedUseCase`: (
                        'feature type': * [ (
                            'reference': "sysml-UseCaseUsage"
                            'resolveInfo': "UseCaseUsage"
                        ) ]
                        'key': "sysml-Definition-ownedUseCase"
                        'multiple': * "true"
                        'name': "ownedUseCase"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-Definition-ownedView`: (
                        'feature type': * [ (
                            'reference': "sysml-ViewUsage"
                            'resolveInfo': "ViewUsage"
                        ) ]
                        'key': "sysml-Definition-ownedView"
                        'multiple': * "true"
                        'name': "ownedView"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-Definition-ownedViewpoint`: (
                        'feature type': * [ (
                            'reference': "sysml-ViewpointUsage"
                            'resolveInfo': "ViewpointUsage"
                        ) ]
                        'key': "sysml-Definition-ownedViewpoint"
                        'multiple': * "true"
                        'name': "ownedViewpoint"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-Definition-ownedRendering`: (
                        'feature type': * [ (
                            'reference': "sysml-RenderingUsage"
                            'resolveInfo': "RenderingUsage"
                        ) ]
                        'key': "sysml-Definition-ownedRendering"
                        'multiple': * "true"
                        'name': "ownedRendering"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-Definition-ownedMetadata`: (
                        'feature type': * [ (
                            'reference': "sysml-MetadataUsage"
                            'resolveInfo': "MetadataUsage"
                        ) ]
                        'key': "sysml-Definition-ownedMetadata"
                        'multiple': * "true"
                        'name': "ownedMetadata"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-Definition-ownedUsage`: (
                        'feature type': * [ (
                            'reference': "sysml-IUsage"
                            'resolveInfo': "IUsage"
                        ) ]
                        'key': "sysml-Definition-ownedUsage"
                        'multiple': * "true"
                        'name': "ownedUsage"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IClassifier"
                    'resolveInfo': "IClassifier"
                ) ]
                'partition': "false"
            )
        )
        `sysml-ReferenceUsage`: (
            'key': "sysml-ReferenceUsage"
            'name': "ReferenceUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IUsage"
                    'resolveInfo': "IUsage"
                ) ]
                'partition': "false"
            )
        )
        `sysml-AttributeUsage`: (
            'key': "sysml-AttributeUsage"
            'name': "AttributeUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-AttributeUsage-attributeDefinition`: (
                        'feature type': * [ (
                            'reference': "sysml-IDataType"
                            'resolveInfo': "IDataType"
                        ) ]
                        'key': "sysml-AttributeUsage-attributeDefinition"
                        'multiple': * "true"
                        'name': "attributeDefinition"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IUsage"
                    'resolveInfo': "IUsage"
                ) ]
                'partition': "false"
            )
        )
        `sysml-EnumerationUsage`: (
            'key': "sysml-EnumerationUsage"
            'name': "EnumerationUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-AttributeUsage"
                    'resolveInfo': "AttributeUsage"
                ) ]
                'features': {
                    `sysml-EnumerationUsage-enumerationDefinition`: (
                        'feature type': * [ (
                            'reference': "sysml-EnumerationDefinition"
                            'resolveInfo': "EnumerationDefinition"
                        ) ]
                        'key': "sysml-EnumerationUsage-enumerationDefinition"
                        'multiple': * "false"
                        'name': "enumerationDefinition"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-EnumerationDefinition`: (
            'key': "sysml-EnumerationDefinition"
            'name': "EnumerationDefinition"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-AttributeDefinition"
                    'resolveInfo': "AttributeDefinition"
                ) ]
                'features': {
                    `sysml-EnumerationDefinition-enumeratedValue`: (
                        'feature type': * [ (
                            'reference': "sysml-EnumerationUsage"
                            'resolveInfo': "EnumerationUsage"
                        ) ]
                        'key': "sysml-EnumerationDefinition-enumeratedValue"
                        'multiple': * "true"
                        'name': "enumeratedValue"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-AttributeDefinition`: (
            'key': "sysml-AttributeDefinition"
            'name': "AttributeDefinition"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-Definition"
                    'resolveInfo': "Definition"
                ) ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IDataType"
                    'resolveInfo': "IDataType"
                ) ]
                'partition': "false"
            )
        )
        `sysml-IOccurrenceUsage`: (
            'key': "sysml-IOccurrenceUsage"
            'name': "IOccurrenceUsage"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-IUsage"
                    'resolveInfo': "IUsage"
                ) ]
                'features': {
                    `sysml-IOccurrenceUsage-occurrenceDefinition`: (
                        'feature type': * [ (
                            'reference': "sysml-IClass"
                            'resolveInfo': "IClass"
                        ) ]
                        'key': "sysml-IOccurrenceUsage-occurrenceDefinition"
                        'multiple': * "true"
                        'name': "occurrenceDefinition"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IOccurrenceUsage-individualDefinition`: (
                        'feature type': * [ (
                            'reference': "sysml-OccurrenceDefinition"
                            'resolveInfo': "OccurrenceDefinition"
                        ) ]
                        'key': "sysml-IOccurrenceUsage-individualDefinition"
                        'multiple': * "false"
                        'name': "individualDefinition"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IOccurrenceUsage-isIndividual`: (
                        'feature type': ~
                        'key': "sysml-IOccurrenceUsage-isIndividual"
                        'multiple': ~
                        'name': "isIndividual"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-Boolean"
                            'resolveInfo': "Boolean"
                        ) ]
                    )
                    `sysml-IOccurrenceUsage-portionKind`: (
                        'feature type': ~
                        'key': "sysml-IOccurrenceUsage-portionKind"
                        'multiple': ~
                        'name': "portionKind"
                        'optional': "true"
                        'property type': * [ (
                            'reference': "sysml-PortionKind"
                            'resolveInfo': "PortionKind"
                        ) ]
                    )
                }
            )
        )
        `sysml-OccurrenceDefinition`: (
            'key': "sysml-OccurrenceDefinition"
            'name': "OccurrenceDefinition"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-Definition"
                    'resolveInfo': "Definition"
                ) ]
                'features': {
                    `sysml-OccurrenceDefinition-lifeClass`: (
                        'feature type': * [ (
                            'reference': "sysml-LifeClass"
                            'resolveInfo': "LifeClass"
                        ) ]
                        'key': "sysml-OccurrenceDefinition-lifeClass"
                        'multiple': * "false"
                        'name': "lifeClass"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-OccurrenceDefinition-isIndividual`: (
                        'feature type': ~
                        'key': "sysml-OccurrenceDefinition-isIndividual"
                        'multiple': ~
                        'name': "isIndividual"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-Boolean"
                            'resolveInfo': "Boolean"
                        ) ]
                    )
                }
                'implements': [ (
                    'reference': "sysml-IClass"
                    'resolveInfo': "IClass"
                ) ]
                'partition': "false"
            )
        )
        `sysml-LifeClass`: (
            'key': "sysml-LifeClass"
            'name': "LifeClass"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IClass"
                    'resolveInfo': "IClass"
                ) ]
                'partition': "false"
            )
        )
        `sysml-PortionKind`: (
            'key': "sysml-PortionKind"
            'name': "PortionKind"
            'type': | 'enumeration' {
                `sysml-PortionKind-timeslice`: (
                    'key': "sysml-PortionKind-timeslice"
                    'name': "timeslice"
                )
                `sysml-PortionKind-snapshot`: (
                    'key': "sysml-PortionKind-snapshot"
                    'name': "snapshot"
                )
            }
        )
        `sysml-IItemUsage`: (
            'key': "sysml-IItemUsage"
            'name': "IItemUsage"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-IOccurrenceUsage"
                    'resolveInfo': "IOccurrenceUsage"
                ) ]
                'features': {
                    `sysml-IItemUsage-itemDefinition`: (
                        'feature type': * [ (
                            'reference': "sysml-IStructure"
                            'resolveInfo': "IStructure"
                        ) ]
                        'key': "sysml-IItemUsage-itemDefinition"
                        'multiple': * "true"
                        'name': "itemDefinition"
                        'optional': "true"
                        'property type': ~
                    )
                }
            )
        )
        `sysml-IPartUsage`: (
            'key': "sysml-IPartUsage"
            'name': "IPartUsage"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-IItemUsage"
                    'resolveInfo': "IItemUsage"
                ) ]
                'features': {
                    `sysml-IPartUsage-partDefinition`: (
                        'feature type': * [ (
                            'reference': "sysml-PartDefinition"
                            'resolveInfo': "PartDefinition"
                        ) ]
                        'key': "sysml-IPartUsage-partDefinition"
                        'multiple': * "true"
                        'name': "partDefinition"
                        'optional': "true"
                        'property type': ~
                    )
                }
            )
        )
        `sysml-PartDefinition`: (
            'key': "sysml-PartDefinition"
            'name': "PartDefinition"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-ItemDefinition"
                    'resolveInfo': "ItemDefinition"
                ) ]
                'features': {
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-ItemDefinition`: (
            'key': "sysml-ItemDefinition"
            'name': "ItemDefinition"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-OccurrenceDefinition"
                    'resolveInfo': "OccurrenceDefinition"
                ) ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IStructure"
                    'resolveInfo': "IStructure"
                ) ]
                'partition': "false"
            )
        )
        `sysml-PortUsage`: (
            'key': "sysml-PortUsage"
            'name': "PortUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-PortUsage-portDefinition`: (
                        'feature type': * [ (
                            'reference': "sysml-PortDefinition"
                            'resolveInfo': "PortDefinition"
                        ) ]
                        'key': "sysml-PortUsage-portDefinition"
                        'multiple': * "true"
                        'name': "portDefinition"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IOccurrenceUsage"
                    'resolveInfo': "IOccurrenceUsage"
                ) ]
                'partition': "false"
            )
        )
        `sysml-PortDefinition`: (
            'key': "sysml-PortDefinition"
            'name': "PortDefinition"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-OccurrenceDefinition"
                    'resolveInfo': "OccurrenceDefinition"
                ) ]
                'features': {
                    `sysml-PortDefinition-conjugatedPortDefinition`: (
                        'feature type': * [ (
                            'reference': "sysml-ConjugatedPortDefinition"
                            'resolveInfo': "ConjugatedPortDefinition"
                        ) ]
                        'key': "sysml-PortDefinition-conjugatedPortDefinition"
                        'multiple': * "false"
                        'name': "conjugatedPortDefinition"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IStructure"
                    'resolveInfo': "IStructure"
                ) ]
                'partition': "false"
            )
        )
        `sysml-ConjugatedPortDefinition`: (
            'key': "sysml-ConjugatedPortDefinition"
            'name': "ConjugatedPortDefinition"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-PortDefinition"
                    'resolveInfo': "PortDefinition"
                ) ]
                'features': {
                    `sysml-ConjugatedPortDefinition-ownedPortConjugator`: (
                        'feature type': * [ (
                            'reference': "sysml-PortConjugation"
                            'resolveInfo': "PortConjugation"
                        ) ]
                        'key': "sysml-ConjugatedPortDefinition-ownedPortConjugator"
                        'multiple': * "false"
                        'name': "ownedPortConjugator"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-ConjugatedPortDefinition-originalPortDefinition`: (
                        'feature type': * [ (
                            'reference': "sysml-PortDefinition"
                            'resolveInfo': "PortDefinition"
                        ) ]
                        'key': "sysml-ConjugatedPortDefinition-originalPortDefinition"
                        'multiple': * "false"
                        'name': "originalPortDefinition"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-PortConjugation`: (
            'key': "sysml-PortConjugation"
            'name': "PortConjugation"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-Conjugation"
                    'resolveInfo': "Conjugation"
                ) ]
                'features': {
                    `sysml-PortConjugation-originalPortDefinition`: (
                        'feature type': * [ (
                            'reference': "sysml-PortDefinition"
                            'resolveInfo': "PortDefinition"
                        ) ]
                        'key': "sysml-PortConjugation-originalPortDefinition"
                        'multiple': * "false"
                        'name': "originalPortDefinition"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-PortConjugation-conjugatedPortDefinition`: (
                        'feature type': * [ (
                            'reference': "sysml-ConjugatedPortDefinition"
                            'resolveInfo': "ConjugatedPortDefinition"
                        ) ]
                        'key': "sysml-PortConjugation-conjugatedPortDefinition"
                        'multiple': * "false"
                        'name': "conjugatedPortDefinition"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-FlowConnectionUsage`: (
            'key': "sysml-FlowConnectionUsage"
            'name': "FlowConnectionUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-ConnectorAsUsage"
                    'resolveInfo': "ConnectorAsUsage"
                ) ]
                'features': {
                    `sysml-FlowConnectionUsage-flowConnectionDefinition`: (
                        'feature type': * [ (
                            'reference': "sysml-IInteraction"
                            'resolveInfo': "IInteraction"
                        ) ]
                        'key': "sysml-FlowConnectionUsage-flowConnectionDefinition"
                        'multiple': * "true"
                        'name': "flowConnectionDefinition"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IActionUsage"
                    'resolveInfo': "IActionUsage"
                ) (
                    'reference': "sysml-IItemFlow"
                    'resolveInfo': "IItemFlow"
                ) ]
                'partition': "false"
            )
        )
        `sysml-IActionUsage`: (
            'key': "sysml-IActionUsage"
            'name': "IActionUsage"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-IOccurrenceUsage"
                    'resolveInfo': "IOccurrenceUsage"
                ) (
                    'reference': "sysml-IStep"
                    'resolveInfo': "IStep"
                ) ]
                'features': {
                    `sysml-IActionUsage-actionDefinition`: (
                        'feature type': * [ (
                            'reference': "sysml-IBehavior"
                            'resolveInfo': "IBehavior"
                        ) ]
                        'key': "sysml-IActionUsage-actionDefinition"
                        'multiple': * "true"
                        'name': "actionDefinition"
                        'optional': "true"
                        'property type': ~
                    )
                }
            )
        )
        `sysml-AllocationUsage`: (
            'key': "sysml-AllocationUsage"
            'name': "AllocationUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-ConnectionUsage"
                    'resolveInfo': "ConnectionUsage"
                ) ]
                'features': {
                    `sysml-AllocationUsage-allocationDefinition`: (
                        'feature type': * [ (
                            'reference': "sysml-AllocationDefinition"
                            'resolveInfo': "AllocationDefinition"
                        ) ]
                        'key': "sysml-AllocationUsage-allocationDefinition"
                        'multiple': * "true"
                        'name': "allocationDefinition"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-AllocationDefinition`: (
            'key': "sysml-AllocationDefinition"
            'name': "AllocationDefinition"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-ConnectionDefinition"
                    'resolveInfo': "ConnectionDefinition"
                ) ]
                'features': {
                    `sysml-AllocationDefinition-allocation`: (
                        'feature type': * [ (
                            'reference': "sysml-AllocationUsage"
                            'resolveInfo': "AllocationUsage"
                        ) ]
                        'key': "sysml-AllocationDefinition-allocation"
                        'multiple': * "true"
                        'name': "allocation"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-ConnectionDefinition`: (
            'key': "sysml-ConnectionDefinition"
            'name': "ConnectionDefinition"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-PartDefinition"
                    'resolveInfo': "PartDefinition"
                ) ]
                'features': {
                    `sysml-ConnectionDefinition-connectionEnd`: (
                        'feature type': * [ (
                            'reference': "sysml-IUsage"
                            'resolveInfo': "IUsage"
                        ) ]
                        'key': "sysml-ConnectionDefinition-connectionEnd"
                        'multiple': * "true"
                        'name': "connectionEnd"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IAssociationStructure"
                    'resolveInfo': "IAssociationStructure"
                ) ]
                'partition': "false"
            )
        )
        `sysml-StateUsage`: (
            'key': "sysml-StateUsage"
            'name': "StateUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-StateUsage-stateDefinition`: (
                        'feature type': * [ (
                            'reference': "sysml-IBehavior"
                            'resolveInfo': "IBehavior"
                        ) ]
                        'key': "sysml-StateUsage-stateDefinition"
                        'multiple': * "true"
                        'name': "stateDefinition"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-StateUsage-entryAction`: (
                        'feature type': * [ (
                            'reference': "sysml-IActionUsage"
                            'resolveInfo': "IActionUsage"
                        ) ]
                        'key': "sysml-StateUsage-entryAction"
                        'multiple': * "false"
                        'name': "entryAction"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-StateUsage-doAction`: (
                        'feature type': * [ (
                            'reference': "sysml-IActionUsage"
                            'resolveInfo': "IActionUsage"
                        ) ]
                        'key': "sysml-StateUsage-doAction"
                        'multiple': * "false"
                        'name': "doAction"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-StateUsage-exitAction`: (
                        'feature type': * [ (
                            'reference': "sysml-IActionUsage"
                            'resolveInfo': "IActionUsage"
                        ) ]
                        'key': "sysml-StateUsage-exitAction"
                        'multiple': * "false"
                        'name': "exitAction"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-StateUsage-isParallel`: (
                        'feature type': ~
                        'key': "sysml-StateUsage-isParallel"
                        'multiple': ~
                        'name': "isParallel"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-Boolean"
                            'resolveInfo': "Boolean"
                        ) ]
                    )
                }
                'implements': [ (
                    'reference': "sysml-IActionUsage"
                    'resolveInfo': "IActionUsage"
                ) ]
                'partition': "false"
            )
        )
        `sysml-TransitionUsage`: (
            'key': "sysml-TransitionUsage"
            'name': "TransitionUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-TransitionUsage-source`: (
                        'feature type': * [ (
                            'reference': "sysml-IActionUsage"
                            'resolveInfo': "IActionUsage"
                        ) ]
                        'key': "sysml-TransitionUsage-source"
                        'multiple': * "false"
                        'name': "source"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-TransitionUsage-target`: (
                        'feature type': * [ (
                            'reference': "sysml-IActionUsage"
                            'resolveInfo': "IActionUsage"
                        ) ]
                        'key': "sysml-TransitionUsage-target"
                        'multiple': * "false"
                        'name': "target"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-TransitionUsage-triggerAction`: (
                        'feature type': * [ (
                            'reference': "sysml-AcceptActionUsage"
                            'resolveInfo': "AcceptActionUsage"
                        ) ]
                        'key': "sysml-TransitionUsage-triggerAction"
                        'multiple': * "true"
                        'name': "triggerAction"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-TransitionUsage-guardExpression`: (
                        'feature type': * [ (
                            'reference': "sysml-IExpression"
                            'resolveInfo': "IExpression"
                        ) ]
                        'key': "sysml-TransitionUsage-guardExpression"
                        'multiple': * "true"
                        'name': "guardExpression"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-TransitionUsage-effectAction`: (
                        'feature type': * [ (
                            'reference': "sysml-IActionUsage"
                            'resolveInfo': "IActionUsage"
                        ) ]
                        'key': "sysml-TransitionUsage-effectAction"
                        'multiple': * "true"
                        'name': "effectAction"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-TransitionUsage-succession`: (
                        'feature type': * [ (
                            'reference': "sysml-ISuccession"
                            'resolveInfo': "ISuccession"
                        ) ]
                        'key': "sysml-TransitionUsage-succession"
                        'multiple': * "false"
                        'name': "succession"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IActionUsage"
                    'resolveInfo': "IActionUsage"
                ) ]
                'partition': "false"
            )
        )
        `sysml-AcceptActionUsage`: (
            'key': "sysml-AcceptActionUsage"
            'name': "AcceptActionUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-AcceptActionUsage-receiverArgument`: (
                        'feature type': * [ (
                            'reference': "sysml-IExpression"
                            'resolveInfo': "IExpression"
                        ) ]
                        'key': "sysml-AcceptActionUsage-receiverArgument"
                        'multiple': * "false"
                        'name': "receiverArgument"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-AcceptActionUsage-payloadParameter`: (
                        'feature type': * [ (
                            'reference': "sysml-ReferenceUsage"
                            'resolveInfo': "ReferenceUsage"
                        ) ]
                        'key': "sysml-AcceptActionUsage-payloadParameter"
                        'multiple': * "false"
                        'name': "payloadParameter"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-AcceptActionUsage-payloadArgument`: (
                        'feature type': * [ (
                            'reference': "sysml-IExpression"
                            'resolveInfo': "IExpression"
                        ) ]
                        'key': "sysml-AcceptActionUsage-payloadArgument"
                        'multiple': * "false"
                        'name': "payloadArgument"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IActionUsage"
                    'resolveInfo': "IActionUsage"
                ) ]
                'partition': "false"
            )
        )
        `sysml-CalculationUsage`: (
            'key': "sysml-CalculationUsage"
            'name': "CalculationUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-CalculationUsage-calculationDefinition`: (
                        'feature type': * [ (
                            'reference': "sysml-IFunction"
                            'resolveInfo': "IFunction"
                        ) ]
                        'key': "sysml-CalculationUsage-calculationDefinition"
                        'multiple': * "false"
                        'name': "calculationDefinition"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IActionUsage"
                    'resolveInfo': "IActionUsage"
                ) (
                    'reference': "sysml-IExpression"
                    'resolveInfo': "IExpression"
                ) ]
                'partition': "false"
            )
        )
        `sysml-IConstraintUsage`: (
            'key': "sysml-IConstraintUsage"
            'name': "IConstraintUsage"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-IOccurrenceUsage"
                    'resolveInfo': "IOccurrenceUsage"
                ) (
                    'reference': "sysml-IBooleanExpression"
                    'resolveInfo': "IBooleanExpression"
                ) ]
                'features': {
                    `sysml-IConstraintUsage-constraintDefinition`: (
                        'feature type': * [ (
                            'reference': "sysml-IPredicate"
                            'resolveInfo': "IPredicate"
                        ) ]
                        'key': "sysml-IConstraintUsage-constraintDefinition"
                        'multiple': * "false"
                        'name': "constraintDefinition"
                        'optional': "true"
                        'property type': ~
                    )
                }
            )
        )
        `sysml-RequirementUsage`: (
            'key': "sysml-RequirementUsage"
            'name': "RequirementUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-RequirementUsage-requirementDefinition`: (
                        'feature type': * [ (
                            'reference': "sysml-RequirementDefinition"
                            'resolveInfo': "RequirementDefinition"
                        ) ]
                        'key': "sysml-RequirementUsage-requirementDefinition"
                        'multiple': * "false"
                        'name': "requirementDefinition"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-RequirementUsage-reqId`: (
                        'feature type': ~
                        'key': "sysml-RequirementUsage-reqId"
                        'multiple': ~
                        'name': "reqId"
                        'optional': "true"
                        'property type': * [ (
                            'reference': "types-String"
                            'resolveInfo': "String"
                        ) ]
                    )
                    `sysml-RequirementUsage-requiredConstraint`: (
                        'feature type': * [ (
                            'reference': "sysml-IConstraintUsage"
                            'resolveInfo': "IConstraintUsage"
                        ) ]
                        'key': "sysml-RequirementUsage-requiredConstraint"
                        'multiple': * "true"
                        'name': "requiredConstraint"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-RequirementUsage-assumedConstraint`: (
                        'feature type': * [ (
                            'reference': "sysml-IConstraintUsage"
                            'resolveInfo': "IConstraintUsage"
                        ) ]
                        'key': "sysml-RequirementUsage-assumedConstraint"
                        'multiple': * "true"
                        'name': "assumedConstraint"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-RequirementUsage-subjectParameter`: (
                        'feature type': * [ (
                            'reference': "sysml-IUsage"
                            'resolveInfo': "IUsage"
                        ) ]
                        'key': "sysml-RequirementUsage-subjectParameter"
                        'multiple': * "false"
                        'name': "subjectParameter"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-RequirementUsage-framedConcern`: (
                        'feature type': * [ (
                            'reference': "sysml-ConcernUsage"
                            'resolveInfo': "ConcernUsage"
                        ) ]
                        'key': "sysml-RequirementUsage-framedConcern"
                        'multiple': * "true"
                        'name': "framedConcern"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-RequirementUsage-actorParameter`: (
                        'feature type': * [ (
                            'reference': "sysml-IPartUsage"
                            'resolveInfo': "IPartUsage"
                        ) ]
                        'key': "sysml-RequirementUsage-actorParameter"
                        'multiple': * "true"
                        'name': "actorParameter"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-RequirementUsage-stakeholderParameter`: (
                        'feature type': * [ (
                            'reference': "sysml-IPartUsage"
                            'resolveInfo': "IPartUsage"
                        ) ]
                        'key': "sysml-RequirementUsage-stakeholderParameter"
                        'multiple': * "true"
                        'name': "stakeholderParameter"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-RequirementUsage-textContainer`: (
                        'feature type': * [ (
                            'reference': "sysml-TextContainer"
                            'resolveInfo': "TextContainer"
                        ) ]
                        'key': "sysml-RequirementUsage-textContainer"
                        'multiple': * "true"
                        'name': "textContainer"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IConstraintUsage"
                    'resolveInfo': "IConstraintUsage"
                ) ]
                'partition': "false"
            )
        )
        `sysml-RequirementDefinition`: (
            'key': "sysml-RequirementDefinition"
            'name': "RequirementDefinition"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-ConstraintDefinition"
                    'resolveInfo': "ConstraintDefinition"
                ) ]
                'features': {
                    `sysml-RequirementDefinition-reqId`: (
                        'feature type': ~
                        'key': "sysml-RequirementDefinition-reqId"
                        'multiple': ~
                        'name': "reqId"
                        'optional': "true"
                        'property type': * [ (
                            'reference': "types-String"
                            'resolveInfo': "String"
                        ) ]
                    )
                    `sysml-RequirementDefinition-subjectParameter`: (
                        'feature type': * [ (
                            'reference': "sysml-IUsage"
                            'resolveInfo': "IUsage"
                        ) ]
                        'key': "sysml-RequirementDefinition-subjectParameter"
                        'multiple': * "false"
                        'name': "subjectParameter"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-RequirementDefinition-actorParameter`: (
                        'feature type': * [ (
                            'reference': "sysml-IPartUsage"
                            'resolveInfo': "IPartUsage"
                        ) ]
                        'key': "sysml-RequirementDefinition-actorParameter"
                        'multiple': * "true"
                        'name': "actorParameter"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-RequirementDefinition-stakeholderParameter`: (
                        'feature type': * [ (
                            'reference': "sysml-IPartUsage"
                            'resolveInfo': "IPartUsage"
                        ) ]
                        'key': "sysml-RequirementDefinition-stakeholderParameter"
                        'multiple': * "true"
                        'name': "stakeholderParameter"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-RequirementDefinition-assumedConstraint`: (
                        'feature type': * [ (
                            'reference': "sysml-IConstraintUsage"
                            'resolveInfo': "IConstraintUsage"
                        ) ]
                        'key': "sysml-RequirementDefinition-assumedConstraint"
                        'multiple': * "true"
                        'name': "assumedConstraint"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-RequirementDefinition-requiredConstraint`: (
                        'feature type': * [ (
                            'reference': "sysml-IConstraintUsage"
                            'resolveInfo': "IConstraintUsage"
                        ) ]
                        'key': "sysml-RequirementDefinition-requiredConstraint"
                        'multiple': * "true"
                        'name': "requiredConstraint"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-RequirementDefinition-framedConcern`: (
                        'feature type': * [ (
                            'reference': "sysml-ConcernUsage"
                            'resolveInfo': "ConcernUsage"
                        ) ]
                        'key': "sysml-RequirementDefinition-framedConcern"
                        'multiple': * "true"
                        'name': "framedConcern"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-RequirementDefinition-textContainer`: (
                        'feature type': * [ (
                            'reference': "sysml-TextContainer"
                            'resolveInfo': "TextContainer"
                        ) ]
                        'key': "sysml-RequirementDefinition-textContainer"
                        'multiple': * "true"
                        'name': "textContainer"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-ConstraintDefinition`: (
            'key': "sysml-ConstraintDefinition"
            'name': "ConstraintDefinition"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-OccurrenceDefinition"
                    'resolveInfo': "OccurrenceDefinition"
                ) ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IPredicate"
                    'resolveInfo': "IPredicate"
                ) ]
                'partition': "false"
            )
        )
        `sysml-ConcernUsage`: (
            'key': "sysml-ConcernUsage"
            'name': "ConcernUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-RequirementUsage"
                    'resolveInfo': "RequirementUsage"
                ) ]
                'features': {
                    `sysml-ConcernUsage-concernDefinition`: (
                        'feature type': * [ (
                            'reference': "sysml-ConcernDefinition"
                            'resolveInfo': "ConcernDefinition"
                        ) ]
                        'key': "sysml-ConcernUsage-concernDefinition"
                        'multiple': * "false"
                        'name': "concernDefinition"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-ConcernDefinition`: (
            'key': "sysml-ConcernDefinition"
            'name': "ConcernDefinition"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-RequirementDefinition"
                    'resolveInfo': "RequirementDefinition"
                ) ]
                'features': {
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-CaseUsage`: (
            'key': "sysml-CaseUsage"
            'name': "CaseUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-CalculationUsage"
                    'resolveInfo': "CalculationUsage"
                ) ]
                'features': {
                    `sysml-CaseUsage-objectiveRequirement`: (
                        'feature type': * [ (
                            'reference': "sysml-RequirementUsage"
                            'resolveInfo': "RequirementUsage"
                        ) ]
                        'key': "sysml-CaseUsage-objectiveRequirement"
                        'multiple': * "false"
                        'name': "objectiveRequirement"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-CaseUsage-caseDefinition`: (
                        'feature type': * [ (
                            'reference': "sysml-CaseDefinition"
                            'resolveInfo': "CaseDefinition"
                        ) ]
                        'key': "sysml-CaseUsage-caseDefinition"
                        'multiple': * "false"
                        'name': "caseDefinition"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-CaseUsage-subjectParameter`: (
                        'feature type': * [ (
                            'reference': "sysml-IUsage"
                            'resolveInfo': "IUsage"
                        ) ]
                        'key': "sysml-CaseUsage-subjectParameter"
                        'multiple': * "false"
                        'name': "subjectParameter"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-CaseUsage-actorParameter`: (
                        'feature type': * [ (
                            'reference': "sysml-IPartUsage"
                            'resolveInfo': "IPartUsage"
                        ) ]
                        'key': "sysml-CaseUsage-actorParameter"
                        'multiple': * "true"
                        'name': "actorParameter"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-CaseDefinition`: (
            'key': "sysml-CaseDefinition"
            'name': "CaseDefinition"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-CalculationDefinition"
                    'resolveInfo': "CalculationDefinition"
                ) ]
                'features': {
                    `sysml-CaseDefinition-objectiveRequirement`: (
                        'feature type': * [ (
                            'reference': "sysml-RequirementUsage"
                            'resolveInfo': "RequirementUsage"
                        ) ]
                        'key': "sysml-CaseDefinition-objectiveRequirement"
                        'multiple': * "false"
                        'name': "objectiveRequirement"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-CaseDefinition-subjectParameter`: (
                        'feature type': * [ (
                            'reference': "sysml-IUsage"
                            'resolveInfo': "IUsage"
                        ) ]
                        'key': "sysml-CaseDefinition-subjectParameter"
                        'multiple': * "false"
                        'name': "subjectParameter"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-CaseDefinition-actorParameter`: (
                        'feature type': * [ (
                            'reference': "sysml-IPartUsage"
                            'resolveInfo': "IPartUsage"
                        ) ]
                        'key': "sysml-CaseDefinition-actorParameter"
                        'multiple': * "true"
                        'name': "actorParameter"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-CalculationDefinition`: (
            'key': "sysml-CalculationDefinition"
            'name': "CalculationDefinition"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-ActionDefinition"
                    'resolveInfo': "ActionDefinition"
                ) ]
                'features': {
                    `sysml-CalculationDefinition-calculation`: (
                        'feature type': * [ (
                            'reference': "sysml-CalculationUsage"
                            'resolveInfo': "CalculationUsage"
                        ) ]
                        'key': "sysml-CalculationDefinition-calculation"
                        'multiple': * "true"
                        'name': "calculation"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IFunction"
                    'resolveInfo': "IFunction"
                ) ]
                'partition': "false"
            )
        )
        `sysml-ActionDefinition`: (
            'key': "sysml-ActionDefinition"
            'name': "ActionDefinition"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-OccurrenceDefinition"
                    'resolveInfo': "OccurrenceDefinition"
                ) ]
                'features': {
                    `sysml-ActionDefinition-action`: (
                        'feature type': * [ (
                            'reference': "sysml-IActionUsage"
                            'resolveInfo': "IActionUsage"
                        ) ]
                        'key': "sysml-ActionDefinition-action"
                        'multiple': * "true"
                        'name': "action"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IBehavior"
                    'resolveInfo': "IBehavior"
                ) ]
                'partition': "false"
            )
        )
        `sysml-AnalysisCaseUsage`: (
            'key': "sysml-AnalysisCaseUsage"
            'name': "AnalysisCaseUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-CaseUsage"
                    'resolveInfo': "CaseUsage"
                ) ]
                'features': {
                    `sysml-AnalysisCaseUsage-analysisCaseDefinition`: (
                        'feature type': * [ (
                            'reference': "sysml-AnalysisCaseDefinition"
                            'resolveInfo': "AnalysisCaseDefinition"
                        ) ]
                        'key': "sysml-AnalysisCaseUsage-analysisCaseDefinition"
                        'multiple': * "false"
                        'name': "analysisCaseDefinition"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-AnalysisCaseUsage-resultExpression`: (
                        'feature type': * [ (
                            'reference': "sysml-IExpression"
                            'resolveInfo': "IExpression"
                        ) ]
                        'key': "sysml-AnalysisCaseUsage-resultExpression"
                        'multiple': * "false"
                        'name': "resultExpression"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-AnalysisCaseDefinition`: (
            'key': "sysml-AnalysisCaseDefinition"
            'name': "AnalysisCaseDefinition"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-CaseDefinition"
                    'resolveInfo': "CaseDefinition"
                ) ]
                'features': {
                    `sysml-AnalysisCaseDefinition-resultExpression`: (
                        'feature type': * [ (
                            'reference': "sysml-IExpression"
                            'resolveInfo': "IExpression"
                        ) ]
                        'key': "sysml-AnalysisCaseDefinition-resultExpression"
                        'multiple': * "false"
                        'name': "resultExpression"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-VerificationCaseUsage`: (
            'key': "sysml-VerificationCaseUsage"
            'name': "VerificationCaseUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-CaseUsage"
                    'resolveInfo': "CaseUsage"
                ) ]
                'features': {
                    `sysml-VerificationCaseUsage-verificationCaseDefinition`: (
                        'feature type': * [ (
                            'reference': "sysml-VerificationCaseDefinition"
                            'resolveInfo': "VerificationCaseDefinition"
                        ) ]
                        'key': "sysml-VerificationCaseUsage-verificationCaseDefinition"
                        'multiple': * "false"
                        'name': "verificationCaseDefinition"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-VerificationCaseUsage-verifiedRequirement`: (
                        'feature type': * [ (
                            'reference': "sysml-RequirementUsage"
                            'resolveInfo': "RequirementUsage"
                        ) ]
                        'key': "sysml-VerificationCaseUsage-verifiedRequirement"
                        'multiple': * "true"
                        'name': "verifiedRequirement"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-VerificationCaseDefinition`: (
            'key': "sysml-VerificationCaseDefinition"
            'name': "VerificationCaseDefinition"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-CaseDefinition"
                    'resolveInfo': "CaseDefinition"
                ) ]
                'features': {
                    `sysml-VerificationCaseDefinition-verifiedRequirement`: (
                        'feature type': * [ (
                            'reference': "sysml-RequirementUsage"
                            'resolveInfo': "RequirementUsage"
                        ) ]
                        'key': "sysml-VerificationCaseDefinition-verifiedRequirement"
                        'multiple': * "true"
                        'name': "verifiedRequirement"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-UseCaseUsage`: (
            'key': "sysml-UseCaseUsage"
            'name': "UseCaseUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-CaseUsage"
                    'resolveInfo': "CaseUsage"
                ) ]
                'features': {
                    `sysml-UseCaseUsage-useCaseDefinition`: (
                        'feature type': * [ (
                            'reference': "sysml-UseCaseDefinition"
                            'resolveInfo': "UseCaseDefinition"
                        ) ]
                        'key': "sysml-UseCaseUsage-useCaseDefinition"
                        'multiple': * "false"
                        'name': "useCaseDefinition"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-UseCaseUsage-includedUseCase`: (
                        'feature type': * [ (
                            'reference': "sysml-UseCaseUsage"
                            'resolveInfo': "UseCaseUsage"
                        ) ]
                        'key': "sysml-UseCaseUsage-includedUseCase"
                        'multiple': * "true"
                        'name': "includedUseCase"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-UseCaseDefinition`: (
            'key': "sysml-UseCaseDefinition"
            'name': "UseCaseDefinition"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-CaseDefinition"
                    'resolveInfo': "CaseDefinition"
                ) ]
                'features': {
                    `sysml-UseCaseDefinition-includedUseCase`: (
                        'feature type': * [ (
                            'reference': "sysml-UseCaseUsage"
                            'resolveInfo': "UseCaseUsage"
                        ) ]
                        'key': "sysml-UseCaseDefinition-includedUseCase"
                        'multiple': * "true"
                        'name': "includedUseCase"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-ViewUsage`: (
            'key': "sysml-ViewUsage"
            'name': "ViewUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-ViewUsage-viewDefinition`: (
                        'feature type': * [ (
                            'reference': "sysml-ViewDefinition"
                            'resolveInfo': "ViewDefinition"
                        ) ]
                        'key': "sysml-ViewUsage-viewDefinition"
                        'multiple': * "false"
                        'name': "viewDefinition"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-ViewUsage-satisfiedViewpoint`: (
                        'feature type': * [ (
                            'reference': "sysml-ViewpointUsage"
                            'resolveInfo': "ViewpointUsage"
                        ) ]
                        'key': "sysml-ViewUsage-satisfiedViewpoint"
                        'multiple': * "true"
                        'name': "satisfiedViewpoint"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-ViewUsage-exposedElement`: (
                        'feature type': * [ (
                            'reference': "sysml-IElement"
                            'resolveInfo': "IElement"
                        ) ]
                        'key': "sysml-ViewUsage-exposedElement"
                        'multiple': * "true"
                        'name': "exposedElement"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-ViewUsage-viewRendering`: (
                        'feature type': * [ (
                            'reference': "sysml-RenderingUsage"
                            'resolveInfo': "RenderingUsage"
                        ) ]
                        'key': "sysml-ViewUsage-viewRendering"
                        'multiple': * "false"
                        'name': "viewRendering"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-ViewUsage-viewCondition`: (
                        'feature type': * [ (
                            'reference': "sysml-IExpression"
                            'resolveInfo': "IExpression"
                        ) ]
                        'key': "sysml-ViewUsage-viewCondition"
                        'multiple': * "true"
                        'name': "viewCondition"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IPartUsage"
                    'resolveInfo': "IPartUsage"
                ) ]
                'partition': "false"
            )
        )
        `sysml-ViewDefinition`: (
            'key': "sysml-ViewDefinition"
            'name': "ViewDefinition"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-PartDefinition"
                    'resolveInfo': "PartDefinition"
                ) ]
                'features': {
                    `sysml-ViewDefinition-view`: (
                        'feature type': * [ (
                            'reference': "sysml-ViewUsage"
                            'resolveInfo': "ViewUsage"
                        ) ]
                        'key': "sysml-ViewDefinition-view"
                        'multiple': * "true"
                        'name': "view"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-ViewDefinition-satisfiedViewpoint`: (
                        'feature type': * [ (
                            'reference': "sysml-ViewpointUsage"
                            'resolveInfo': "ViewpointUsage"
                        ) ]
                        'key': "sysml-ViewDefinition-satisfiedViewpoint"
                        'multiple': * "true"
                        'name': "satisfiedViewpoint"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-ViewDefinition-viewRendering`: (
                        'feature type': * [ (
                            'reference': "sysml-RenderingUsage"
                            'resolveInfo': "RenderingUsage"
                        ) ]
                        'key': "sysml-ViewDefinition-viewRendering"
                        'multiple': * "false"
                        'name': "viewRendering"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-ViewDefinition-viewCondition`: (
                        'feature type': * [ (
                            'reference': "sysml-IExpression"
                            'resolveInfo': "IExpression"
                        ) ]
                        'key': "sysml-ViewDefinition-viewCondition"
                        'multiple': * "true"
                        'name': "viewCondition"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-ViewpointUsage`: (
            'key': "sysml-ViewpointUsage"
            'name': "ViewpointUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-RequirementUsage"
                    'resolveInfo': "RequirementUsage"
                ) ]
                'features': {
                    `sysml-ViewpointUsage-viewpointDefinition`: (
                        'feature type': * [ (
                            'reference': "sysml-ViewpointDefinition"
                            'resolveInfo': "ViewpointDefinition"
                        ) ]
                        'key': "sysml-ViewpointUsage-viewpointDefinition"
                        'multiple': * "false"
                        'name': "viewpointDefinition"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-ViewpointUsage-viewpointStakeholder`: (
                        'feature type': * [ (
                            'reference': "sysml-IPartUsage"
                            'resolveInfo': "IPartUsage"
                        ) ]
                        'key': "sysml-ViewpointUsage-viewpointStakeholder"
                        'multiple': * "true"
                        'name': "viewpointStakeholder"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-ViewpointDefinition`: (
            'key': "sysml-ViewpointDefinition"
            'name': "ViewpointDefinition"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-RequirementDefinition"
                    'resolveInfo': "RequirementDefinition"
                ) ]
                'features': {
                    `sysml-ViewpointDefinition-viewpointStakeholder`: (
                        'feature type': * [ (
                            'reference': "sysml-IPartUsage"
                            'resolveInfo': "IPartUsage"
                        ) ]
                        'key': "sysml-ViewpointDefinition-viewpointStakeholder"
                        'multiple': * "true"
                        'name': "viewpointStakeholder"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-RenderingUsage`: (
            'key': "sysml-RenderingUsage"
            'name': "RenderingUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-RenderingUsage-renderingDefinition`: (
                        'feature type': * [ (
                            'reference': "sysml-RenderingDefinition"
                            'resolveInfo': "RenderingDefinition"
                        ) ]
                        'key': "sysml-RenderingUsage-renderingDefinition"
                        'multiple': * "false"
                        'name': "renderingDefinition"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IPartUsage"
                    'resolveInfo': "IPartUsage"
                ) ]
                'partition': "false"
            )
        )
        `sysml-RenderingDefinition`: (
            'key': "sysml-RenderingDefinition"
            'name': "RenderingDefinition"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-PartDefinition"
                    'resolveInfo': "PartDefinition"
                ) ]
                'features': {
                    `sysml-RenderingDefinition-rendering`: (
                        'feature type': * [ (
                            'reference': "sysml-RenderingUsage"
                            'resolveInfo': "RenderingUsage"
                        ) ]
                        'key': "sysml-RenderingDefinition-rendering"
                        'multiple': * "true"
                        'name': "rendering"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-MetadataUsage`: (
            'key': "sysml-MetadataUsage"
            'name': "MetadataUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-MetadataFeature"
                    'resolveInfo': "MetadataFeature"
                ) ]
                'features': {
                    `sysml-MetadataUsage-metadataDefinition`: (
                        'feature type': * [ (
                            'reference': "sysml-IMetaclass"
                            'resolveInfo': "IMetaclass"
                        ) ]
                        'key': "sysml-MetadataUsage-metadataDefinition"
                        'multiple': * "false"
                        'name': "metadataDefinition"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IItemUsage"
                    'resolveInfo': "IItemUsage"
                ) ]
                'partition': "false"
            )
        )
        `sysml-InterfaceDefinition`: (
            'key': "sysml-InterfaceDefinition"
            'name': "InterfaceDefinition"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-ConnectionDefinition"
                    'resolveInfo': "ConnectionDefinition"
                ) ]
                'features': {
                    `sysml-InterfaceDefinition-interfaceEnd`: (
                        'feature type': * [ (
                            'reference': "sysml-PortUsage"
                            'resolveInfo': "PortUsage"
                        ) ]
                        'key': "sysml-InterfaceDefinition-interfaceEnd"
                        'multiple': * "true"
                        'name': "interfaceEnd"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-ConjugatedPortTyping`: (
            'key': "sysml-ConjugatedPortTyping"
            'name': "ConjugatedPortTyping"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-FeatureTyping"
                    'resolveInfo': "FeatureTyping"
                ) ]
                'features': {
                    `sysml-ConjugatedPortTyping-portDefinition`: (
                        'feature type': * [ (
                            'reference': "sysml-PortDefinition"
                            'resolveInfo': "PortDefinition"
                        ) ]
                        'key': "sysml-ConjugatedPortTyping-portDefinition"
                        'multiple': * "false"
                        'name': "portDefinition"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-ConjugatedPortTyping-conjugatedPortDefinition`: (
                        'feature type': * [ (
                            'reference': "sysml-ConjugatedPortDefinition"
                            'resolveInfo': "ConjugatedPortDefinition"
                        ) ]
                        'key': "sysml-ConjugatedPortTyping-conjugatedPortDefinition"
                        'multiple': * "false"
                        'name': "conjugatedPortDefinition"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-TransitionFeatureMembership`: (
            'key': "sysml-TransitionFeatureMembership"
            'name': "TransitionFeatureMembership"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-FeatureMembership"
                    'resolveInfo': "FeatureMembership"
                ) ]
                'features': {
                    `sysml-TransitionFeatureMembership-kind`: (
                        'feature type': ~
                        'key': "sysml-TransitionFeatureMembership-kind"
                        'multiple': ~
                        'name': "kind"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "sysml-TransitionFeatureKind"
                            'resolveInfo': "TransitionFeatureKind"
                        ) ]
                    )
                    `sysml-TransitionFeatureMembership-transitionFeature`: (
                        'feature type': * [ (
                            'reference': "sysml-IStep"
                            'resolveInfo': "IStep"
                        ) ]
                        'key': "sysml-TransitionFeatureMembership-transitionFeature"
                        'multiple': * "false"
                        'name': "transitionFeature"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-TransitionFeatureKind`: (
            'key': "sysml-TransitionFeatureKind"
            'name': "TransitionFeatureKind"
            'type': | 'enumeration' {
                `sysml-TransitionFeatureKind-trigger`: (
                    'key': "sysml-TransitionFeatureKind-trigger"
                    'name': "trigger"
                )
                `sysml-TransitionFeatureKind-guard`: (
                    'key': "sysml-TransitionFeatureKind-guard"
                    'name': "guard"
                )
                `sysml-TransitionFeatureKind-effect`: (
                    'key': "sysml-TransitionFeatureKind-effect"
                    'name': "effect"
                )
            }
        )
        `sysml-ExhibitStateUsage`: (
            'key': "sysml-ExhibitStateUsage"
            'name': "ExhibitStateUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-StateUsage"
                    'resolveInfo': "StateUsage"
                ) ]
                'features': {
                    `sysml-ExhibitStateUsage-exhibitedState`: (
                        'feature type': * [ (
                            'reference': "sysml-StateUsage"
                            'resolveInfo': "StateUsage"
                        ) ]
                        'key': "sysml-ExhibitStateUsage-exhibitedState"
                        'multiple': * "false"
                        'name': "exhibitedState"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IPerformActionUsage"
                    'resolveInfo': "IPerformActionUsage"
                ) ]
                'partition': "false"
            )
        )
        `sysml-IPerformActionUsage`: (
            'key': "sysml-IPerformActionUsage"
            'name': "IPerformActionUsage"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-IActionUsage"
                    'resolveInfo': "IActionUsage"
                ) (
                    'reference': "sysml-IEventOccurrenceUsage"
                    'resolveInfo': "IEventOccurrenceUsage"
                ) ]
                'features': {
                    `sysml-IPerformActionUsage-performedAction`: (
                        'feature type': * [ (
                            'reference': "sysml-IActionUsage"
                            'resolveInfo': "IActionUsage"
                        ) ]
                        'key': "sysml-IPerformActionUsage-performedAction"
                        'multiple': * "false"
                        'name': "performedAction"
                        'optional': "false"
                        'property type': ~
                    )
                }
            )
        )
        `sysml-IEventOccurrenceUsage`: (
            'key': "sysml-IEventOccurrenceUsage"
            'name': "IEventOccurrenceUsage"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-IOccurrenceUsage"
                    'resolveInfo': "IOccurrenceUsage"
                ) ]
                'features': {
                    `sysml-IEventOccurrenceUsage-eventOccurrence`: (
                        'feature type': * [ (
                            'reference': "sysml-IOccurrenceUsage"
                            'resolveInfo': "IOccurrenceUsage"
                        ) ]
                        'key': "sysml-IEventOccurrenceUsage-eventOccurrence"
                        'multiple': * "false"
                        'name': "eventOccurrence"
                        'optional': "false"
                        'property type': ~
                    )
                }
            )
        )
        `sysml-StateSubactionKind`: (
            'key': "sysml-StateSubactionKind"
            'name': "StateSubactionKind"
            'type': | 'enumeration' {
                `sysml-StateSubactionKind-entry`: (
                    'key': "sysml-StateSubactionKind-entry"
                    'name': "entry"
                )
                `sysml-StateSubactionKind-do`: (
                    'key': "sysml-StateSubactionKind-do"
                    'name': "do"
                )
                `sysml-StateSubactionKind-exit`: (
                    'key': "sysml-StateSubactionKind-exit"
                    'name': "exit"
                )
            }
        )
        `sysml-StateSubactionMembership`: (
            'key': "sysml-StateSubactionMembership"
            'name': "StateSubactionMembership"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-FeatureMembership"
                    'resolveInfo': "FeatureMembership"
                ) ]
                'features': {
                    `sysml-StateSubactionMembership-kind`: (
                        'feature type': ~
                        'key': "sysml-StateSubactionMembership-kind"
                        'multiple': ~
                        'name': "kind"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "sysml-StateSubactionKind"
                            'resolveInfo': "StateSubactionKind"
                        ) ]
                    )
                    `sysml-StateSubactionMembership-action`: (
                        'feature type': * [ (
                            'reference': "sysml-IActionUsage"
                            'resolveInfo': "IActionUsage"
                        ) ]
                        'key': "sysml-StateSubactionMembership-action"
                        'multiple': * "false"
                        'name': "action"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-StateDefinition`: (
            'key': "sysml-StateDefinition"
            'name': "StateDefinition"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-ActionDefinition"
                    'resolveInfo': "ActionDefinition"
                ) ]
                'features': {
                    `sysml-StateDefinition-state`: (
                        'feature type': * [ (
                            'reference': "sysml-StateUsage"
                            'resolveInfo': "StateUsage"
                        ) ]
                        'key': "sysml-StateDefinition-state"
                        'multiple': * "true"
                        'name': "state"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-StateDefinition-entryAction`: (
                        'feature type': * [ (
                            'reference': "sysml-IActionUsage"
                            'resolveInfo': "IActionUsage"
                        ) ]
                        'key': "sysml-StateDefinition-entryAction"
                        'multiple': * "false"
                        'name': "entryAction"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-StateDefinition-doAction`: (
                        'feature type': * [ (
                            'reference': "sysml-IActionUsage"
                            'resolveInfo': "IActionUsage"
                        ) ]
                        'key': "sysml-StateDefinition-doAction"
                        'multiple': * "false"
                        'name': "doAction"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-StateDefinition-exitAction`: (
                        'feature type': * [ (
                            'reference': "sysml-IActionUsage"
                            'resolveInfo': "IActionUsage"
                        ) ]
                        'key': "sysml-StateDefinition-exitAction"
                        'multiple': * "false"
                        'name': "exitAction"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-StateDefinition-isParallel`: (
                        'feature type': ~
                        'key': "sysml-StateDefinition-isParallel"
                        'multiple': ~
                        'name': "isParallel"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "types-Boolean"
                            'resolveInfo': "Boolean"
                        ) ]
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-SuccessionFlowConnectionUsage`: (
            'key': "sysml-SuccessionFlowConnectionUsage"
            'name': "SuccessionFlowConnectionUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-FlowConnectionUsage"
                    'resolveInfo': "FlowConnectionUsage"
                ) ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-ISuccessionItemFlow"
                    'resolveInfo': "ISuccessionItemFlow"
                ) ]
                'partition': "false"
            )
        )
        `sysml-FlowConnectionDefinition`: (
            'key': "sysml-FlowConnectionDefinition"
            'name': "FlowConnectionDefinition"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-ActionDefinition"
                    'resolveInfo': "ActionDefinition"
                ) ]
                'features': {
                    `sysml-FlowConnectionDefinition-flowConnectionEnd`: (
                        'feature type': * [ (
                            'reference': "sysml-IUsage"
                            'resolveInfo': "IUsage"
                        ) ]
                        'key': "sysml-FlowConnectionDefinition-flowConnectionEnd"
                        'multiple': * "true"
                        'name': "flowConnectionEnd"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IInteraction"
                    'resolveInfo': "IInteraction"
                ) ]
                'partition': "false"
            )
        )
        `sysml-RequirementVerificationMembership`: (
            'key': "sysml-RequirementVerificationMembership"
            'name': "RequirementVerificationMembership"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-RequirementConstraintMembership"
                    'resolveInfo': "RequirementConstraintMembership"
                ) ]
                'features': {
                    `sysml-RequirementVerificationMembership-ownedRequirement`: (
                        'feature type': * [ (
                            'reference': "sysml-RequirementUsage"
                            'resolveInfo': "RequirementUsage"
                        ) ]
                        'key': "sysml-RequirementVerificationMembership-ownedRequirement"
                        'multiple': * "false"
                        'name': "ownedRequirement"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-RequirementVerificationMembership-verifiedRequirement`: (
                        'feature type': * [ (
                            'reference': "sysml-RequirementUsage"
                            'resolveInfo': "RequirementUsage"
                        ) ]
                        'key': "sysml-RequirementVerificationMembership-verifiedRequirement"
                        'multiple': * "false"
                        'name': "verifiedRequirement"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-RequirementConstraintMembership`: (
            'key': "sysml-RequirementConstraintMembership"
            'name': "RequirementConstraintMembership"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-FeatureMembership"
                    'resolveInfo': "FeatureMembership"
                ) ]
                'features': {
                    `sysml-RequirementConstraintMembership-kind`: (
                        'feature type': ~
                        'key': "sysml-RequirementConstraintMembership-kind"
                        'multiple': ~
                        'name': "kind"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "sysml-RequirementConstraintKind"
                            'resolveInfo': "RequirementConstraintKind"
                        ) ]
                    )
                    `sysml-RequirementConstraintMembership-ownedConstraint`: (
                        'feature type': * [ (
                            'reference': "sysml-IConstraintUsage"
                            'resolveInfo': "IConstraintUsage"
                        ) ]
                        'key': "sysml-RequirementConstraintMembership-ownedConstraint"
                        'multiple': * "false"
                        'name': "ownedConstraint"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-RequirementConstraintMembership-referencedConstraint`: (
                        'feature type': * [ (
                            'reference': "sysml-IConstraintUsage"
                            'resolveInfo': "IConstraintUsage"
                        ) ]
                        'key': "sysml-RequirementConstraintMembership-referencedConstraint"
                        'multiple': * "false"
                        'name': "referencedConstraint"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-RequirementConstraintKind`: (
            'key': "sysml-RequirementConstraintKind"
            'name': "RequirementConstraintKind"
            'type': | 'enumeration' {
                `sysml-RequirementConstraintKind-assumption`: (
                    'key': "sysml-RequirementConstraintKind-assumption"
                    'name': "assumption"
                )
                `sysml-RequirementConstraintKind-requirement`: (
                    'key': "sysml-RequirementConstraintKind-requirement"
                    'name': "requirement"
                )
            }
        )
        `sysml-IncludeUseCaseUsage`: (
            'key': "sysml-IncludeUseCaseUsage"
            'name': "IncludeUseCaseUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-UseCaseUsage"
                    'resolveInfo': "UseCaseUsage"
                ) ]
                'features': {
                    `sysml-IncludeUseCaseUsage-useCaseIncluded`: (
                        'feature type': * [ (
                            'reference': "sysml-UseCaseUsage"
                            'resolveInfo': "UseCaseUsage"
                        ) ]
                        'key': "sysml-IncludeUseCaseUsage-useCaseIncluded"
                        'multiple': * "false"
                        'name': "useCaseIncluded"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IPerformActionUsage"
                    'resolveInfo': "IPerformActionUsage"
                ) ]
                'partition': "false"
            )
        )
        `sysml-ObjectiveMembership`: (
            'key': "sysml-ObjectiveMembership"
            'name': "ObjectiveMembership"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-FeatureMembership"
                    'resolveInfo': "FeatureMembership"
                ) ]
                'features': {
                    `sysml-ObjectiveMembership-ownedObjectiveRequirement`: (
                        'feature type': * [ (
                            'reference': "sysml-RequirementUsage"
                            'resolveInfo': "RequirementUsage"
                        ) ]
                        'key': "sysml-ObjectiveMembership-ownedObjectiveRequirement"
                        'multiple': * "false"
                        'name': "ownedObjectiveRequirement"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-SatisfyRequirementUsage`: (
            'key': "sysml-SatisfyRequirementUsage"
            'name': "SatisfyRequirementUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-RequirementUsage"
                    'resolveInfo': "RequirementUsage"
                ) ]
                'features': {
                    `sysml-SatisfyRequirementUsage-satisfiedRequirement`: (
                        'feature type': * [ (
                            'reference': "sysml-RequirementUsage"
                            'resolveInfo': "RequirementUsage"
                        ) ]
                        'key': "sysml-SatisfyRequirementUsage-satisfiedRequirement"
                        'multiple': * "false"
                        'name': "satisfiedRequirement"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-SatisfyRequirementUsage-satisfyingFeature`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-SatisfyRequirementUsage-satisfyingFeature"
                        'multiple': * "false"
                        'name': "satisfyingFeature"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IAssertConstraintUsage"
                    'resolveInfo': "IAssertConstraintUsage"
                ) ]
                'partition': "false"
            )
        )
        `sysml-IAssertConstraintUsage`: (
            'key': "sysml-IAssertConstraintUsage"
            'name': "IAssertConstraintUsage"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-IConstraintUsage"
                    'resolveInfo': "IConstraintUsage"
                ) (
                    'reference': "sysml-IInvariant"
                    'resolveInfo': "IInvariant"
                ) ]
                'features': {
                    `sysml-IAssertConstraintUsage-assertedConstraint`: (
                        'feature type': * [ (
                            'reference': "sysml-IConstraintUsage"
                            'resolveInfo': "IConstraintUsage"
                        ) ]
                        'key': "sysml-IAssertConstraintUsage-assertedConstraint"
                        'multiple': * "false"
                        'name': "assertedConstraint"
                        'optional': "false"
                        'property type': ~
                    )
                }
            )
        )
        `sysml-SubjectMembership`: (
            'key': "sysml-SubjectMembership"
            'name': "SubjectMembership"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-ParameterMembership"
                    'resolveInfo': "ParameterMembership"
                ) ]
                'features': {
                    `sysml-SubjectMembership-ownedSubjectParameter`: (
                        'feature type': * [ (
                            'reference': "sysml-IUsage"
                            'resolveInfo': "IUsage"
                        ) ]
                        'key': "sysml-SubjectMembership-ownedSubjectParameter"
                        'multiple': * "false"
                        'name': "ownedSubjectParameter"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-StakeholderMembership`: (
            'key': "sysml-StakeholderMembership"
            'name': "StakeholderMembership"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-ParameterMembership"
                    'resolveInfo': "ParameterMembership"
                ) ]
                'features': {
                    `sysml-StakeholderMembership-ownedStakeholderParameter`: (
                        'feature type': * [ (
                            'reference': "sysml-IPartUsage"
                            'resolveInfo': "IPartUsage"
                        ) ]
                        'key': "sysml-StakeholderMembership-ownedStakeholderParameter"
                        'multiple': * "false"
                        'name': "ownedStakeholderParameter"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-FramedConcernMembership`: (
            'key': "sysml-FramedConcernMembership"
            'name': "FramedConcernMembership"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-RequirementConstraintMembership"
                    'resolveInfo': "RequirementConstraintMembership"
                ) ]
                'features': {
                    `sysml-FramedConcernMembership-ownedConcern`: (
                        'feature type': * [ (
                            'reference': "sysml-ConcernUsage"
                            'resolveInfo': "ConcernUsage"
                        ) ]
                        'key': "sysml-FramedConcernMembership-ownedConcern"
                        'multiple': * "false"
                        'name': "ownedConcern"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-FramedConcernMembership-referencedConcern`: (
                        'feature type': * [ (
                            'reference': "sysml-ConcernUsage"
                            'resolveInfo': "ConcernUsage"
                        ) ]
                        'key': "sysml-FramedConcernMembership-referencedConcern"
                        'multiple': * "false"
                        'name': "referencedConcern"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-ActorMembership`: (
            'key': "sysml-ActorMembership"
            'name': "ActorMembership"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-ParameterMembership"
                    'resolveInfo': "ParameterMembership"
                ) ]
                'features': {
                    `sysml-ActorMembership-ownedActorParameter`: (
                        'feature type': * [ (
                            'reference': "sysml-IPartUsage"
                            'resolveInfo': "IPartUsage"
                        ) ]
                        'key': "sysml-ActorMembership-ownedActorParameter"
                        'multiple': * "false"
                        'name': "ownedActorParameter"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-ViewRenderingMembership`: (
            'key': "sysml-ViewRenderingMembership"
            'name': "ViewRenderingMembership"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-FeatureMembership"
                    'resolveInfo': "FeatureMembership"
                ) ]
                'features': {
                    `sysml-ViewRenderingMembership-ownedRendering`: (
                        'feature type': * [ (
                            'reference': "sysml-RenderingUsage"
                            'resolveInfo': "RenderingUsage"
                        ) ]
                        'key': "sysml-ViewRenderingMembership-ownedRendering"
                        'multiple': * "false"
                        'name': "ownedRendering"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-ViewRenderingMembership-referencedRendering`: (
                        'feature type': * [ (
                            'reference': "sysml-RenderingUsage"
                            'resolveInfo': "RenderingUsage"
                        ) ]
                        'key': "sysml-ViewRenderingMembership-referencedRendering"
                        'multiple': * "false"
                        'name': "referencedRendering"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-NamespaceExpose`: (
            'key': "sysml-NamespaceExpose"
            'name': "NamespaceExpose"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-NamespaceImport"
                    'resolveInfo': "NamespaceImport"
                ) ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IExpose"
                    'resolveInfo': "IExpose"
                ) ]
                'partition': "false"
            )
        )
        `sysml-IExpose`: (
            'key': "sysml-IExpose"
            'name': "IExpose"
            'type': | 'interface' (
                'extends': [ (
                    'reference': "sysml-IImport"
                    'resolveInfo': "IImport"
                ) ]
                'features': {
                }
            )
        )
        `sysml-MembershipExpose`: (
            'key': "sysml-MembershipExpose"
            'name': "MembershipExpose"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-MembershipImport"
                    'resolveInfo': "MembershipImport"
                ) ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IExpose"
                    'resolveInfo': "IExpose"
                ) ]
                'partition': "false"
            )
        )
        `sysml-BindingConnectorAsUsage`: (
            'key': "sysml-BindingConnectorAsUsage"
            'name': "BindingConnectorAsUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-ConnectorAsUsage"
                    'resolveInfo': "ConnectorAsUsage"
                ) ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IBindingConnector"
                    'resolveInfo': "IBindingConnector"
                ) ]
                'partition': "false"
            )
        )
        `sysml-SuccessionAsUsage`: (
            'key': "sysml-SuccessionAsUsage"
            'name': "SuccessionAsUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-ConnectorAsUsage"
                    'resolveInfo': "ConnectorAsUsage"
                ) ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-ISuccession"
                    'resolveInfo': "ISuccession"
                ) ]
                'partition': "false"
            )
        )
        `sysml-ForkNode`: (
            'key': "sysml-ForkNode"
            'name': "ForkNode"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-ControlNode"
                    'resolveInfo': "ControlNode"
                ) ]
                'features': {
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-ControlNode`: (
            'key': "sysml-ControlNode"
            'name': "ControlNode"
            'type': | 'concept' (
                'abstract': "true"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IActionUsage"
                    'resolveInfo': "IActionUsage"
                ) ]
                'partition': "false"
            )
        )
        `sysml-JoinNode`: (
            'key': "sysml-JoinNode"
            'name': "JoinNode"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-ControlNode"
                    'resolveInfo': "ControlNode"
                ) ]
                'features': {
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-SendActionUsage`: (
            'key': "sysml-SendActionUsage"
            'name': "SendActionUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-SendActionUsage-receiverArgument`: (
                        'feature type': * [ (
                            'reference': "sysml-IExpression"
                            'resolveInfo': "IExpression"
                        ) ]
                        'key': "sysml-SendActionUsage-receiverArgument"
                        'multiple': * "false"
                        'name': "receiverArgument"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-SendActionUsage-payloadArgument`: (
                        'feature type': * [ (
                            'reference': "sysml-IExpression"
                            'resolveInfo': "IExpression"
                        ) ]
                        'key': "sysml-SendActionUsage-payloadArgument"
                        'multiple': * "false"
                        'name': "payloadArgument"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-SendActionUsage-senderArgument`: (
                        'feature type': * [ (
                            'reference': "sysml-IExpression"
                            'resolveInfo': "IExpression"
                        ) ]
                        'key': "sysml-SendActionUsage-senderArgument"
                        'multiple': * "false"
                        'name': "senderArgument"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IActionUsage"
                    'resolveInfo': "IActionUsage"
                ) ]
                'partition': "false"
            )
        )
        `sysml-DecisionNode`: (
            'key': "sysml-DecisionNode"
            'name': "DecisionNode"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-ControlNode"
                    'resolveInfo': "ControlNode"
                ) ]
                'features': {
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-MergeNode`: (
            'key': "sysml-MergeNode"
            'name': "MergeNode"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-ControlNode"
                    'resolveInfo': "ControlNode"
                ) ]
                'features': {
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-LoopActionUsage`: (
            'key': "sysml-LoopActionUsage"
            'name': "LoopActionUsage"
            'type': | 'concept' (
                'abstract': "true"
                'extends': [ ]
                'features': {
                    `sysml-LoopActionUsage-bodyAction`: (
                        'feature type': * [ (
                            'reference': "sysml-IActionUsage"
                            'resolveInfo': "IActionUsage"
                        ) ]
                        'key': "sysml-LoopActionUsage-bodyAction"
                        'multiple': * "false"
                        'name': "bodyAction"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IActionUsage"
                    'resolveInfo': "IActionUsage"
                ) ]
                'partition': "false"
            )
        )
        `sysml-TriggerInvocationExpression`: (
            'key': "sysml-TriggerInvocationExpression"
            'name': "TriggerInvocationExpression"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-InvocationExpression"
                    'resolveInfo': "InvocationExpression"
                ) ]
                'features': {
                    `sysml-TriggerInvocationExpression-kind`: (
                        'feature type': ~
                        'key': "sysml-TriggerInvocationExpression-kind"
                        'multiple': ~
                        'name': "kind"
                        'optional': "false"
                        'property type': * [ (
                            'reference': "sysml-TriggerKind"
                            'resolveInfo': "TriggerKind"
                        ) ]
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-TriggerKind`: (
            'key': "sysml-TriggerKind"
            'name': "TriggerKind"
            'type': | 'enumeration' {
                `sysml-TriggerKind-when`: (
                    'key': "sysml-TriggerKind-when"
                    'name': "when"
                )
                `sysml-TriggerKind-at`: (
                    'key': "sysml-TriggerKind-at"
                    'name': "at"
                )
                `sysml-TriggerKind-after`: (
                    'key': "sysml-TriggerKind-after"
                    'name': "after"
                )
            }
        )
        `sysml-AssignmentActionUsage`: (
            'key': "sysml-AssignmentActionUsage"
            'name': "AssignmentActionUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-AssignmentActionUsage-targetArgument`: (
                        'feature type': * [ (
                            'reference': "sysml-IExpression"
                            'resolveInfo': "IExpression"
                        ) ]
                        'key': "sysml-AssignmentActionUsage-targetArgument"
                        'multiple': * "false"
                        'name': "targetArgument"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-AssignmentActionUsage-valueExpression`: (
                        'feature type': * [ (
                            'reference': "sysml-IExpression"
                            'resolveInfo': "IExpression"
                        ) ]
                        'key': "sysml-AssignmentActionUsage-valueExpression"
                        'multiple': * "false"
                        'name': "valueExpression"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-AssignmentActionUsage-referent`: (
                        'feature type': * [ (
                            'reference': "sysml-IFeature"
                            'resolveInfo': "IFeature"
                        ) ]
                        'key': "sysml-AssignmentActionUsage-referent"
                        'multiple': * "false"
                        'name': "referent"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IActionUsage"
                    'resolveInfo': "IActionUsage"
                ) ]
                'partition': "false"
            )
        )
        `sysml-ForLoopActionUsage`: (
            'key': "sysml-ForLoopActionUsage"
            'name': "ForLoopActionUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-LoopActionUsage"
                    'resolveInfo': "LoopActionUsage"
                ) ]
                'features': {
                    `sysml-ForLoopActionUsage-seqArgument`: (
                        'feature type': * [ (
                            'reference': "sysml-IExpression"
                            'resolveInfo': "IExpression"
                        ) ]
                        'key': "sysml-ForLoopActionUsage-seqArgument"
                        'multiple': * "false"
                        'name': "seqArgument"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-ForLoopActionUsage-loopVariable`: (
                        'feature type': * [ (
                            'reference': "sysml-ReferenceUsage"
                            'resolveInfo': "ReferenceUsage"
                        ) ]
                        'key': "sysml-ForLoopActionUsage-loopVariable"
                        'multiple': * "false"
                        'name': "loopVariable"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-IfActionUsage`: (
            'key': "sysml-IfActionUsage"
            'name': "IfActionUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-IfActionUsage-elseAction`: (
                        'feature type': * [ (
                            'reference': "sysml-IActionUsage"
                            'resolveInfo': "IActionUsage"
                        ) ]
                        'key': "sysml-IfActionUsage-elseAction"
                        'multiple': * "false"
                        'name': "elseAction"
                        'optional': "true"
                        'property type': ~
                    )
                    `sysml-IfActionUsage-thenAction`: (
                        'feature type': * [ (
                            'reference': "sysml-IActionUsage"
                            'resolveInfo': "IActionUsage"
                        ) ]
                        'key': "sysml-IfActionUsage-thenAction"
                        'multiple': * "false"
                        'name': "thenAction"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-IfActionUsage-ifArgument`: (
                        'feature type': * [ (
                            'reference': "sysml-IExpression"
                            'resolveInfo': "IExpression"
                        ) ]
                        'key': "sysml-IfActionUsage-ifArgument"
                        'multiple': * "false"
                        'name': "ifArgument"
                        'optional': "false"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IActionUsage"
                    'resolveInfo': "IActionUsage"
                ) ]
                'partition': "false"
            )
        )
        `sysml-WhileLoopActionUsage`: (
            'key': "sysml-WhileLoopActionUsage"
            'name': "WhileLoopActionUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-LoopActionUsage"
                    'resolveInfo': "LoopActionUsage"
                ) ]
                'features': {
                    `sysml-WhileLoopActionUsage-whileArgument`: (
                        'feature type': * [ (
                            'reference': "sysml-IExpression"
                            'resolveInfo': "IExpression"
                        ) ]
                        'key': "sysml-WhileLoopActionUsage-whileArgument"
                        'multiple': * "false"
                        'name': "whileArgument"
                        'optional': "false"
                        'property type': ~
                    )
                    `sysml-WhileLoopActionUsage-untilArgument`: (
                        'feature type': * [ (
                            'reference': "sysml-IExpression"
                            'resolveInfo': "IExpression"
                        ) ]
                        'key': "sysml-WhileLoopActionUsage-untilArgument"
                        'multiple': * "false"
                        'name': "untilArgument"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-TerminateActionUsage`: (
            'key': "sysml-TerminateActionUsage"
            'name': "TerminateActionUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-TerminateActionUsage-terminatedOccurrenceArgument`: (
                        'feature type': * [ (
                            'reference': "sysml-IExpression"
                            'resolveInfo': "IExpression"
                        ) ]
                        'key': "sysml-TerminateActionUsage-terminatedOccurrenceArgument"
                        'multiple': * "false"
                        'name': "terminatedOccurrenceArgument"
                        'optional': "true"
                        'property type': ~
                    )
                }
                'implements': [ (
                    'reference': "sysml-IActionUsage"
                    'resolveInfo': "IActionUsage"
                ) ]
                'partition': "false"
            )
        )
        `sysml-MetadataDefinition`: (
            'key': "sysml-MetadataDefinition"
            'name': "MetadataDefinition"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ (
                    'reference': "sysml-ItemDefinition"
                    'resolveInfo': "ItemDefinition"
                ) ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IMetaclass"
                    'resolveInfo': "IMetaclass"
                ) ]
                'partition': "false"
            )
        )
        `sysml-AliasIdsContainer`: (
            'key': "sysml-AliasIdsContainer"
            'name': "AliasIdsContainer"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-AliasIdsContainer-aliasIds`: (
                        'feature type': ~
                        'key': "sysml-AliasIdsContainer-aliasIds"
                        'multiple': ~
                        'name': "aliasIds"
                        'optional': "true"
                        'property type': * [ (
                            'reference': "types-String"
                            'resolveInfo': "String"
                        ) ]
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-TextContainer`: (
            'key': "sysml-TextContainer"
            'name': "TextContainer"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                    `sysml-TextContainer-text`: (
                        'feature type': ~
                        'key': "sysml-TextContainer-text"
                        'multiple': ~
                        'name': "text"
                        'optional': "true"
                        'property type': * [ (
                            'reference': "types-String"
                            'resolveInfo': "String"
                        ) ]
                    )
                }
                'implements': [ ]
                'partition': "false"
            )
        )
        `sysml-Featuring`: (
            'key': "sysml-Featuring"
            'name': "Featuring"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IFeaturing"
                    'resolveInfo': "IFeaturing"
                ) ]
                'partition': "false"
            )
        )
        `sysml-Relationship`: (
            'key': "sysml-Relationship"
            'name': "Relationship"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IRelationship"
                    'resolveInfo': "IRelationship"
                ) ]
                'partition': "false"
            )
        )
        `sysml-Element`: (
            'key': "sysml-Element"
            'name': "Element"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IElement"
                    'resolveInfo': "IElement"
                ) ]
                'partition': "false"
            )
        )
        `sysml-AnnotatingElement`: (
            'key': "sysml-AnnotatingElement"
            'name': "AnnotatingElement"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IAnnotatingElement"
                    'resolveInfo': "IAnnotatingElement"
                ) ]
                'partition': "false"
            )
        )
        `sysml-Step`: (
            'key': "sysml-Step"
            'name': "Step"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IStep"
                    'resolveInfo': "IStep"
                ) ]
                'partition': "false"
            )
        )
        `sysml-Feature`: (
            'key': "sysml-Feature"
            'name': "Feature"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IFeature"
                    'resolveInfo': "IFeature"
                ) ]
                'partition': "false"
            )
        )
        `sysml-Type`: (
            'key': "sysml-Type"
            'name': "Type"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IType"
                    'resolveInfo': "IType"
                ) ]
                'partition': "false"
            )
        )
        `sysml-Namespace`: (
            'key': "sysml-Namespace"
            'name': "Namespace"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-INamespace"
                    'resolveInfo': "INamespace"
                ) ]
                'partition': "false"
            )
        )
        `sysml-Behavior`: (
            'key': "sysml-Behavior"
            'name': "Behavior"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IBehavior"
                    'resolveInfo': "IBehavior"
                ) ]
                'partition': "false"
            )
        )
        `sysml-Class`: (
            'key': "sysml-Class"
            'name': "Class"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IClass"
                    'resolveInfo': "IClass"
                ) ]
                'partition': "false"
            )
        )
        `sysml-Classifier`: (
            'key': "sysml-Classifier"
            'name': "Classifier"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IClassifier"
                    'resolveInfo': "IClassifier"
                ) ]
                'partition': "false"
            )
        )
        `sysml-Succession`: (
            'key': "sysml-Succession"
            'name': "Succession"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-ISuccession"
                    'resolveInfo': "ISuccession"
                ) ]
                'partition': "false"
            )
        )
        `sysml-Connector`: (
            'key': "sysml-Connector"
            'name': "Connector"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IConnector"
                    'resolveInfo': "IConnector"
                ) ]
                'partition': "false"
            )
        )
        `sysml-Structure`: (
            'key': "sysml-Structure"
            'name': "Structure"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IStructure"
                    'resolveInfo': "IStructure"
                ) ]
                'partition': "false"
            )
        )
        `sysml-PartUsage`: (
            'key': "sysml-PartUsage"
            'name': "PartUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IPartUsage"
                    'resolveInfo': "IPartUsage"
                ) ]
                'partition': "false"
            )
        )
        `sysml-ItemUsage`: (
            'key': "sysml-ItemUsage"
            'name': "ItemUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IItemUsage"
                    'resolveInfo': "IItemUsage"
                ) ]
                'partition': "false"
            )
        )
        `sysml-OccurrenceUsage`: (
            'key': "sysml-OccurrenceUsage"
            'name': "OccurrenceUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IOccurrenceUsage"
                    'resolveInfo': "IOccurrenceUsage"
                ) ]
                'partition': "false"
            )
        )
        `sysml-Usage`: (
            'key': "sysml-Usage"
            'name': "Usage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IUsage"
                    'resolveInfo': "IUsage"
                ) ]
                'partition': "false"
            )
        )
        `sysml-DataType`: (
            'key': "sysml-DataType"
            'name': "DataType"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IDataType"
                    'resolveInfo': "IDataType"
                ) ]
                'partition': "false"
            )
        )
        `sysml-ActionUsage`: (
            'key': "sysml-ActionUsage"
            'name': "ActionUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IActionUsage"
                    'resolveInfo': "IActionUsage"
                ) ]
                'partition': "false"
            )
        )
        `sysml-ItemFlow`: (
            'key': "sysml-ItemFlow"
            'name': "ItemFlow"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IItemFlow"
                    'resolveInfo': "IItemFlow"
                ) ]
                'partition': "false"
            )
        )
        `sysml-AssociationStructure`: (
            'key': "sysml-AssociationStructure"
            'name': "AssociationStructure"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IAssociationStructure"
                    'resolveInfo': "IAssociationStructure"
                ) ]
                'partition': "false"
            )
        )
        `sysml-Association`: (
            'key': "sysml-Association"
            'name': "Association"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IAssociation"
                    'resolveInfo': "IAssociation"
                ) ]
                'partition': "false"
            )
        )
        `sysml-Predicate`: (
            'key': "sysml-Predicate"
            'name': "Predicate"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IPredicate"
                    'resolveInfo': "IPredicate"
                ) ]
                'partition': "false"
            )
        )
        `sysml-Function`: (
            'key': "sysml-Function"
            'name': "Function"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IFunction"
                    'resolveInfo': "IFunction"
                ) ]
                'partition': "false"
            )
        )
        `sysml-PerformActionUsage`: (
            'key': "sysml-PerformActionUsage"
            'name': "PerformActionUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IPerformActionUsage"
                    'resolveInfo': "IPerformActionUsage"
                ) ]
                'partition': "false"
            )
        )
        `sysml-EventOccurrenceUsage`: (
            'key': "sysml-EventOccurrenceUsage"
            'name': "EventOccurrenceUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IEventOccurrenceUsage"
                    'resolveInfo': "IEventOccurrenceUsage"
                ) ]
                'partition': "false"
            )
        )
        `sysml-SuccessionItemFlow`: (
            'key': "sysml-SuccessionItemFlow"
            'name': "SuccessionItemFlow"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-ISuccessionItemFlow"
                    'resolveInfo': "ISuccessionItemFlow"
                ) ]
                'partition': "false"
            )
        )
        `sysml-Interaction`: (
            'key': "sysml-Interaction"
            'name': "Interaction"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IInteraction"
                    'resolveInfo': "IInteraction"
                ) ]
                'partition': "false"
            )
        )
        `sysml-AssertConstraintUsage`: (
            'key': "sysml-AssertConstraintUsage"
            'name': "AssertConstraintUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IAssertConstraintUsage"
                    'resolveInfo': "IAssertConstraintUsage"
                ) ]
                'partition': "false"
            )
        )
        `sysml-ConstraintUsage`: (
            'key': "sysml-ConstraintUsage"
            'name': "ConstraintUsage"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IConstraintUsage"
                    'resolveInfo': "IConstraintUsage"
                ) ]
                'partition': "false"
            )
        )
        `sysml-BooleanExpression`: (
            'key': "sysml-BooleanExpression"
            'name': "BooleanExpression"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IBooleanExpression"
                    'resolveInfo': "IBooleanExpression"
                ) ]
                'partition': "false"
            )
        )
        `sysml-Expression`: (
            'key': "sysml-Expression"
            'name': "Expression"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IExpression"
                    'resolveInfo': "IExpression"
                ) ]
                'partition': "false"
            )
        )
        `sysml-Invariant`: (
            'key': "sysml-Invariant"
            'name': "Invariant"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IInvariant"
                    'resolveInfo': "IInvariant"
                ) ]
                'partition': "false"
            )
        )
        `sysml-Expose`: (
            'key': "sysml-Expose"
            'name': "Expose"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IExpose"
                    'resolveInfo': "IExpose"
                ) ]
                'partition': "false"
            )
        )
        `sysml-Import`: (
            'key': "sysml-Import"
            'name': "Import"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IImport"
                    'resolveInfo': "IImport"
                ) ]
                'partition': "false"
            )
        )
        `sysml-BindingConnector`: (
            'key': "sysml-BindingConnector"
            'name': "BindingConnector"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IBindingConnector"
                    'resolveInfo': "IBindingConnector"
                ) ]
                'partition': "false"
            )
        )
        `sysml-Metaclass`: (
            'key': "sysml-Metaclass"
            'name': "Metaclass"
            'type': | 'concept' (
                'abstract': "false"
                'extends': [ ]
                'features': {
                }
                'implements': [ (
                    'reference': "sysml-IMetaclass"
                    'resolveInfo': "IMetaclass"
                ) ]
                'partition': "false"
            )
        )
    }
    'key': "sysml"
    'name': "sysml"
    'version': "1"
)
